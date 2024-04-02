const primaryColor = "#31363F";
const disabledColor = "#CCCBCB";

export const buttonTheme = {
  color: {
    primary: {
      backgroundColor: primaryColor,
      borderColor: primaryColor,
      color: "#fff",
      "&:disabled": {
        backgroundColor: disabledColor,
        borderColor: disabledColor,
        color: "#fff",
      },
      "&:hover": {
        backgroundColor: primaryColor,
        borderColor: primaryColor,
        color: "#fff",
      },
      "&:active": {
        backgroundColor: primaryColor,
        borderColor: primaryColor,
        color: "#fff",
      },
    },
    secondary: {
      backgroundColor: "transparent",
      borderColor: primaryColor,
      color: primaryColor,
      "&:disabled": {
        backgroundColor: "transparent",
        borderColor: disabledColor,
        color: disabledColor,
      },
      "&:hover": {
        backgroundColor: "transparent",
        borderColor: primaryColor,
        color: primaryColor,
      },
      "&:active": {
        backgroundColor: primaryColor,
        borderColor: primaryColor,
        color: "#fff",
      },
    },
  },
};
