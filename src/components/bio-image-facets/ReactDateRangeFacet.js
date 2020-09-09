import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import get from "lodash/get";
import moment from "moment";
import { Container, InputGroup, Row, Input } from "reactstrap";
import {
  updateFilterAction,
  fetchFacetsSearchAction,
} from "../../store/reducer";
import "./DatePicker.scss";

const ReactDateRangeFacet = () => {
  const dispatch = useDispatch();
  const { start, end } = useSelector(
    (state) => state.ui.searchFilters.date_range,
  );
  let { min: date_min, max: date_max } = useSelector((state) => get(state.search.facets, "file_created", { min: null, max: null }));
  if (date_min) {
    date_min = new Date(date_min);
  }
  if (date_max) {
    date_max = new Date(date_max);
  }

  let fStart = null;
  let fEnd = null;
  if (start) {
    fStart = new Date(start);
  }
  if (end) {
    fEnd = new Date(end);
  }

  const start_range = {
    min: date_min,
    max: fEnd || date_max,
  };
  const end_range = {
    min: fStart || date_min,
    max: date_max,
  };

  const toApiDate = (value) => {
    if (value) {
      return moment(value).format("YYYY-MM-DD");
    }
    return value;
  };

  const handleOnDateChange = (date, range) => {
    let fDate = "";
    if (date) {
      fDate = moment(date).format("YYYY-MM-DD");
    }

    let otherDate = null;
    const dateRange = { start: "", end: "" };
    if (range === "start") {
      otherDate = toApiDate(fEnd);
      dateRange.start = fDate;
      dateRange.end = otherDate;
    } else {
      otherDate = toApiDate(fStart);
      dateRange.start = otherDate;
      dateRange.end = fDate;
    }

    dispatch(
      updateFilterAction({
        date_range: { ...dateRange },
      }),
    );

    dispatch(fetchFacetsSearchAction());
  };

  return (
    <div style={{ border: "1px solid #6EB3A6", borderRadius: "5px" }}>
      <h6 id="date-range">
        Date Range
      </h6>
      <Container>
        <Row>
          <InputGroup>
            <DatePicker
              selected={fStart}
              minDate={start_range.min}
              maxDate={start_range.max}
              onChange={(date) => handleOnDateChange(date, "start")}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="yyyy-MM-dd"
              placeholderText="From"
              isClearable
              wrapperClassName="form-control"
              customInput={<Input value={fStart} />}
            />
            <DatePicker
              selected={fEnd}
              minDate={end_range.min}
              maxDate={end_range.max}
              onChange={(date) => handleOnDateChange(date, "end")}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="yyyy-MM-dd"
              placeholderText="To"
              isClearable
              wrapperClassName="form-control"
              customInput={<Input value={fStart} />}
            />
          </InputGroup>
        </Row>
      </Container>
    </div>
  );
};
export default ReactDateRangeFacet;
