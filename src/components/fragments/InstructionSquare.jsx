function InstructionSquare() {
  const categories = ["BUNGA", "PERKAKAS", "BURUNG", "KESENIAN", "BINATANG"];

  return (
    <div className="bg-memo text-white rounded-4 col-12 col-xl-11 col-xxl-9 py-4 px-3 d-flex flex-column align-items-center">
      <h1 className="text-center responsive-text-normal-time fw-bold">
        Petunjuk dan Contoh
      </h1>
      <p className="responsive-text-normal-textinstruc text-center col-12 col-md-10 col-lg-10 col-xl-8 col-xxl-9">
        Pada persoalan berikutnya, terdapat sejumlah pertanyaan mengenai
        kata-kata yang telah saudara hafalkan tadi. Pilihlah salah satu jawaban
        tepat yang sesuai pada nomor soal.
      </p>

      <div className="overflow-auto mt-1 mt-md-0" style={{ width: "95%" }}>
        <div className="d-flex mb-2 justify-content-evenly gap-5 gap-lg-5 gap-xl-1 gap-xxl-4">
          <div style={{ width: "400px" }}>
            <h2 className="responsive-text-normal-head fw-medium">Contoh 09</h2>
            <div className="border border-white rounded-3 d-flex justify-content-center p-2">
              <div className="col-6">
                <p className="fw-bold" style={{ minWidth: "200px" }}>
                  Kata yang mempunyai huruf permulaan - Q - adalah ?
                </p>
                {categories.map((category, index) => (
                  <h3
                    key={index}
                    className="mb-0 fs-6 text-white bg-transparent border border-primary rounded-2 py-2 ps-3 col-10"
                  >
                    {category}
                  </h3>
                ))}
              </div>
              <div className="col-6">
                <h2 className="fs-6 fw-bold">Jawaban</h2>
                <hr className="border border-white" />
                <p style={{ minWidth: "200px" }}>
                  Quintet adalah termasuk dalam jenis kesenian, sehingga jawaban
                  yang benar adalah kesenian. Oleh karena itu, pada kolom
                  jawaban pilih “KESENIAN”
                </p>
              </div>
            </div>
          </div>

          <div style={{ width: "400px" }}>
            <h2 className="responsive-text-normal-head fw-medium">
              Contoh Lainnya
            </h2>
            <div className="border border-white rounded-3 d-flex justify-content-between p-2">
              <div className="col-6">
                <p className="fw-bold" style={{ minWidth: "200px" }}>
                  Kata yang mempunyai huruf permulaan - Z - adalah ?
                </p>
                {categories.map((category, index) => (
                  <h3
                    key={index}
                    className="mb-0 fs-6 text-white bg-transparent border border-primary rounded-2 py-2 ps-3 col-10"
                  >
                    {category}
                  </h3>
                ))}
              </div>
              <div className="col-6">
                <h2 className="fs-6 fw-bold">Jawaban</h2>
                <hr className="border border-white" />
                <p style={{ minWidth: "200px" }}>
                  Jawabannya adalah “ZEBRA”, karena Zebra termasuk dalam jenis
                  binatang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructionSquare;
