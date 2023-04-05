import { Paper } from "@mui/material";
import React, { Component } from "react";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

export default class Light1 extends Component {
  render() {
    return (
      <div className="w-full h-screen justify-center items-center bg-slate-900">
        <Paper elevation={3} className="w-1/3 h-1/2 !bg-slate-900">
          <LightbulbCircleIcon className="" />
        </Paper>
      </div>
    );
  }
}
