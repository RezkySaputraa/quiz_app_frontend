function MemorizeTable() {
  const categories = [
    {
      name: "BUNGA",
      items: ["SOKA", "LARAT", "FLAMBOYAN", "YASMIN", "DAHLIA"],
    },
    {
      name: "PERKAKAS",
      items: ["WAJAN", "JARUM", "KIKIR", "CANGKUL", "PALU"],
    },
    {
      name: "BURUNG",
      items: ["ITIK", "ELANG", "WALET", "TEKUKUR", "NURI"],
    },
    {
      name: "KESENIAN",
      items: ["QUINTET", "ARCA", "OPERA", "UKIRAN", "GAMELAN"],
    },
    {
      name: "BINATANG",
      items: ["RUSA", "MUSANG", "BERUANG", "HARIMAU", "ZEBRA"],
    },
  ];

  return (
    <>
      <h1 className="text-white mb-4 responsive-text-normal-text text-center fw-bold">
        Hafalkan kata-kata di bawah ini selama 3 menit
      </h1>
      <div className="overflow-auto" style={{ width: "70%" }}>
        <table className="text-white table-bordered table tableMy bg-memo">
          <thead>
            <tr>
              {categories.map((category, index) => (
                <th className="text-center py-3 bg-transparent" key={index}>
                  <h1 className="mb-0 fw-semibold responsive-text-normal-head text-white bg-transparent border border-4 border-warning rounded-4 py-2 px-3 px-lg-3">
                    {category.name}
                  </h1>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                {categories.map((category, indexTd) => (
                  <td className="bg-transparent text-center py-3" key={indexTd}>
                    <h1 className="mb-0 fw-medium responsive-text-normal-memo text-white bg-transparent border rounded-4 py-2 px-3 px-lg-2">
                      {category.items[index]}
                    </h1>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MemorizeTable;

{
  /* <div
          className="border border-white rounded-3 py-3 d-flex justify-content-between flex-column"
          style={{ width: "55rem" }}
        >
          <div className="d-flex justify-content-evenly">
            <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
              Bunga
            </Button>
            <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
              Bunga
            </Button>
            <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
              Bunga
            </Button>
            <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
              Bunga
            </Button>
            <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
              Bunga
            </Button>
          </div>
          <hr className="border border-white" />
          <div className="d-flex flex-column gap-5">
            <div className="d-flex justify-content-evenly">
              <Button variant="text-white bg-transparent border-white rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
            </div>
            <div className="d-flex justify-content-evenly">
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
            </div>
            <div className="d-flex justify-content-evenly">
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
            </div>
            <div className="d-flex justify-content-evenly">
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
            </div>
            <div className="d-flex justify-content-evenly">
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
              <Button variant="text-white bg-transparent border-primary rounded-3 col-2 p-1">
                Bunga
              </Button>
            </div>
          </div>
        </div> */
}
