import { Box, Slider, Typography } from "@mui/material";
import React from "react";

const SliderComponent = ({
  title,
  amount,
  minValue,
  maxValue,
  steps,
  setAmount,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Typography variant="subtitle" display="block" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" display="block" gutterBottom>
        {amount[title.split(" ").join("").toLowerCase()]}
        {console.log(title.split(" ").join("").toLowerCase())}
      </Typography>
      <Slider
        value={amount[title.split(" ").join("").toLowerCase()]}
        step={steps}
        marks
        min={minValue}
        max={maxValue}
        valueLabelDisplay="auto"
        onChange={(e) => {
          if (title == "Home Value")
            setAmount({
              ...amount,
              ["homevalue"]: e.target.value.toFixed(0),
              ["downpayment"]: (0.2 * e.target.value).toFixed(0),
              ["loanamount"]: (0.8 * e.target.value).toFixed(0),
            });
          if (title == "Down Payment")
            setAmount({
              ...amount,

              ["downpayment"]: e.target.value.toFixed(0),
              ["loanamount"]: (amount.homevalue - e.target.value).toFixed(0),
            });
          if (title == "Loan Amount")
            setAmount({
              ...amount,

              ["loanamount"]: e.target.value.toFixed(0),
              ["downpayment"]: (amount.homevalue - e.target.value).toFixed(0),
            });

          if (title == "Interest Rate") {
            setAmount({
              ...amount,
              ["interestrate"]: e.target.value.toFixed(0),
            });
          }
        }}
      />
      {console.log(amount)}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">{minValue}</Typography>
        <Typography variant="body2">{maxValue}</Typography>
      </Box>
    </div>
  );
};

export default SliderComponent;
