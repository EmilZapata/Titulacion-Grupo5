
const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

const spreadFormatJson = (feed) => {
  let data = [],
    titleDictionary = {},
    idUsuario;

  feed.entry.forEach((item) => {
    const {
      gs$cell: { col, row },
      content: { $t: value, type },
      updated: { $t: updatedDate },
    } = item;
    if (row === "1") {
      titleDictionary[col] = value;
    } else {
      data.push({
        row,
        value,
        type,
        col,
        title: titleDictionary[col],
        updatedDate,
      });
    }
  });

  let groupDatas = groupBy(data, "row");
  let result = [];
  let information = {};

  for (const key in groupDatas) {
    let dataTemp = {},
      detail;
  
    if (groupDatas.hasOwnProperty(key)) {
      const element = groupDatas[key];
      detail = element.find((item) => item.col === "2").value;
      const idTemp = element.find((item) => item.col === "1");
  
      if (idUsuario && idTemp && idTemp.value !== idUsuario) {
        result.push({ ...information });
        information = {};
      }
  
      idUsuario = idTemp ? idTemp.value : idUsuario;
      element
        .filter(({ col }) => col !== "1" && col !== "2")
        .forEach(({ title, value }) => {
          dataTemp[title] = value;
        });
    }
  
    information.idUsuario = idUsuario;
    information[detail] = information[detail]
      ? [...information[detail], dataTemp]
      : [dataTemp];
  }

  result.push({ ...information });

  return  result
};

export { spreadFormatJson };
