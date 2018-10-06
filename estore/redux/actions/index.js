const INC = "INC";
const DEC = "DEC";

function incActionCreator(by) {
  return {
    type: INC,
    by
  };
}

function decActionCreator(by) {
  return {
    type: DEC,
    by
  };
}
