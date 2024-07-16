import logo from "./logo.svg";
import "./App.css";
import {
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  Paper,
  Select,
  Stack,
} from "@mui/material";
import SliderComponent from "./components/SliderComponent";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const [Data, setData] = useState({
    loanamount: 3000,
    downpayment: 600,
    homevalue: 3000,
    loanterm: 5,
    interestrate: 5,
  });
  const [DownPayment, setDownPayment] = useState(600);
  const [HomeValue, setHomeValue] = useState(3000);
  const [Interset, setInterest] = useState(5);
  return (
    <div className="App">
      <nav>
        <h1>React+Chartjs</h1>
      </nav>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <Paper>
            <ListItem>
              <SliderComponent
                title={"Home Value"}
                amount={Data}
                minValue={1000}
                maxValue={10000}
                steps={100}
                setAmount={setData}
              />
            </ListItem>
            <ListItem>
              <SliderComponent
                title={"Down Payment"}
                amount={Data}
                minValue={0}
                maxValue={Data.homevalue}
                steps={100}
                setAmount={setData}
              />
            </ListItem>
            <ListItem>
              <SliderComponent
                title={"Loan Amount"}
                amount={Data}
                minValue={0}
                maxValue={Data.homevalue}
                steps={100}
                setAmount={setData}
              />
            </ListItem>
            <ListItem>
              <SliderComponent
                title={"Interest Rate"}
                amount={Data}
                minValue={2}
                maxValue={18}
                steps={1}
                setAmount={setData}
              />
            </ListItem>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Data.loanterm}
                label="Tenure"
                defaultValue={5}
                onChange={(e) => {
                  setData({ ...Data, ["loanterm"]: e.target.value });
                }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper>
            <ListItem>
              <Result data={Data}></Result>
            </ListItem>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
