import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import DataGrid from "./DataGrid";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button } from "@mui/material";
import { Popover } from "antd";
import { Select } from "antd";

const { Option } = Select;
const { Search } = Input;

function onChange(value) {
  console.log(`selected ${value}`);
}



function GridComponent() {
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then((response) => {
        setData(response.data);
        setActualData(response.data)
      });
  }, []);

  const [data, setData] = useState([]);
  const [actualData, setActualData] = useState([]);

  const [search, setSearch] = useState("");
  const filteredValues = data.filter((item) => {
    return item["customer"].toLowerCase().includes(search.toLowerCase());
  });

  function onChange(value) {
    if (value) {
      const filteredValues = actualData.filter((item) => {
        return item["status"]==value;
      });
      setData(filteredValues)
    } else {
      setData(actualData)
    }

  }

  const content = (
    <div>
      <div style={{margin:"2%",fontWeight:600}}>Select Filter Option</div>
      <Select
        showSearch
        placeholder="Select a status"
        optionFilterProp="children"
        onChange={onChange}
      >
        <Option value="">All</Option>
        <Option value="Delivered">Delivered</Option>
        <Option value="Prepared">Prepared</Option>
        <Option value="Completed">Completed</Option>
        <Option value="Prepone">Prepone</Option>
      </Select>
    </div>
  );

  return (
    <div>
      <Grid style={{ padding: "2%" }}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            style={{
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "550",
              color: "#52c5aa",
              display: "flex",
              width: "100%",
              borderBottom: " solid #52c5aa",
            }}
          >
            All Orders <p style={{ margin: ".05% 0 0% 1%" }}>{data.length}</p>
          </Typography>
        </Grid>

        <Grid container style={{ marginTop: "2%", marginBottom: "1%" }}>
          <Grid item xs={12} md={3} lg={3}>
            <Search
              placeholder="input customer name"
              allowClear
              style={{ width: "100%" }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={8} lg={8}></Grid>
          <Grid item xs={12} md={1} lg={1} style={{ float: "right" }}>
            <Popover content={content} placement="left">
              <Button>
                <FilterListIcon></FilterListIcon>
              </Button>
            </Popover>
          </Grid>
        </Grid>

        <Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
            style={{
              marginTop: "3%",
              padding: "1% 1% 1% 1%",
              borderRadius: "4px",
              margin: ".1% 0 .1% 0",
              background: "#eaedf7",
            }}
            container
          >
            <Grid
              style={{ color: "#97a1bf", fontWeight: 600 }}
              item
              md={1}
              lg={1}
              xs={6}
            >
              Order Id
            </Grid>
            <Grid
              style={{ color: "#97a1bf", fontWeight: 600 }}
              item
              md={2}
              lg={2}
              xs={6}
            >
              Customer Name
            </Grid>

            <Grid
              style={{ color: "#97a1bf", fontWeight: 600 }}
              item
              md={2}
              lg={2}
              xs={6}
            >
              Address
            </Grid>
            <Grid
              style={{ color: "#97a1bf", fontWeight: 600 }}
              item
              md={2}
              lg={2}
              xs={6}
            >
              Product
            </Grid>
            <Grid
              style={{ color: "#97a1bf", fontWeight: 600 }}
              item
              md={2}
              lg={2}
              xs={6}
            >
              Product Description
            </Grid>
            <Grid
              style={{ color: "#97a1bf", fontWeight: 600 }}
              item
              md={1}
              lg={1}
              xs={6}
            >
              Date Order
            </Grid>
            <Grid
              style={{ color: "#97a1bf", fontWeight: 600, textAlign: "center" }}
              item
              md={2}
              lg={2}
              xs={6}
            >
              Status
            </Grid>
          </Grid>
          <DataGrid
            data={filteredValues}
            style={{ marginTop: "2%" }}
          ></DataGrid>
        </Grid>
      </Grid>
    </div>
  );
}

export default GridComponent;
