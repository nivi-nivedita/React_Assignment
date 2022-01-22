import React from "react";
import { Grid } from "@material-ui/core";
function DataGrid({ data }) {
  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <Grid
              container
              style={{
                borderBottom: "1px solid #eaedf7",
                padding: "1% 1% 1% 1%",
                borderRadius: "4px",
                margin: ".1% 0 .1% 0",
                overflowWrap: "break-word",
              }}
            >
              <Grid item md={1} lg={1} xs={6}>
                {item["order_id"]}
              </Grid>
              <Grid item md={2} lg={2} xs={6}>
                {item["customer"]}
              </Grid>

              <Grid item md={2} lg={2} xs={6}>
                {item["address"]}
              </Grid>
              <Grid item md={2} lg={2} xs={6}>
                {item["product_title"]}
              </Grid>
              <Grid item md={2} lg={2} xs={6}>
                {item["product_description"]}
              </Grid>
              <Grid item md={1} lg={1} xs={6}>
                {item["date"]}
              </Grid>
              {item["status"] == "Delivered" && (
                <Grid
                  item
                  md={2}
                  lg={2}
                  xs={6}
                  style={{
                    background: "#F4F5FE",
                    color: "#4858E3",
                    padding: ".2%",
                    borderRadius: "4px",
                    textAlign: "center",
                    height: "5%",
                  }}
                >
                  {item["status"]}
                </Grid>
              )}
              {item["status"] == "Completed" && (
                <Grid
                  item
                  md={2}
                  lg={2}
                  xs={6}
                  style={{
                    background: "#29CB971A",
                    color: "#29CB97",
                    padding: ".1%",
                    borderRadius: "4px",
                    textAlign: "center",
                    height: "5%",
                  }}
                >
                  {item["status"]}
                </Grid>
              )}
              {item["status"] == "Prepared" && (
                <Grid
                  item
                  md={2}
                  lg={2}
                  xs={6}
                  style={{
                    background: "#FF5F951A",
                    color: "#FF5F95",
                    padding: ".1%",
                    borderRadius: "4px",
                    textAlign: "center",
                    height: "5%",
                  }}
                >
                  {item["status"]}
                </Grid>
              )}
              {item["status"] == "Prepone" && (
                <Grid
                  item
                  md={2}
                  lg={2}
                  xs={6}
                  style={{
                    background: "#3BCDF91A",
                    color: "#3BCDF9",
                    padding: ".1%",
                    borderRadius: "4px",
                    textAlign: "center",
                    height: "5%",
                  }}
                >
                  {item["status"]}
                </Grid>
              )}
            </Grid>
          );
        })}
    </div>
  );
}

export default DataGrid;
