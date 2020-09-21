/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as SvgLai } from "../../assets/icons/LAI.svg";
import { ReactComponent as SvgPanoramic } from "../../assets/icons/panoramic.svg";
import { ReactComponent as SvgPhenocam } from "../../assets/icons/phenocam.svg";
import { ReactComponent as SvgPhotopoint } from "../../assets/icons/photopoint.svg";
import "./ImageTypeSelectFacet.scss";

// Note: Not used properly because we use isMulti in the Select
const CustomSelectValue = ({ data }) => {
  const optionSVGs = {
    lai: SvgLai,
    panorama: SvgPanoramic,
    phenocam: SvgPhenocam,
    photopoint: SvgPhotopoint,
  };

  const Icon = optionSVGs[data.value];
  return (
    <div className="input-select">
      <div className="input-select__single-value">
        {Icon && (
          <span className={`svg-icon svg-icon-${data.value}`}>
            <Icon />
          </span>
        )}
        <span>{`${data.label} (${data.count})`}</span>
      </div>
    </div>
  );
};

CustomSelectValue.propTypes = {
  data: PropTypes.shape,
};
CustomSelectValue.defaultProps = {
  data: null,
};
export default CustomSelectValue;
