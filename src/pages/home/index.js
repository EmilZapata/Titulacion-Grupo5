import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailCourse from "../../components/DetailCourse";
import DetailSilabo from "../../components/DetailSilabo";
import VisitsCounterCountry from "../../components/VisitsCounterCountry";

export default function Home() {
  return (
    <>
      <div className="container" style={styles.container}>
        <Header />
        <main>
          {/* <DetailCourse /> */}
          <DetailSilabo />
        </main>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  container: {
    margin: "0",
  },
};
