import React from "react";
import { components } from "react-select";
import "./ImageTypeSelectFacet.scss";
import { ReactComponent as SvgLai } from "../../assets/icons/LAI.svg";
import { ReactComponent as SvgPanoramic } from "../../assets/icons/panoramic.svg";
import { ReactComponent as SvgPhenocam } from "../../assets/icons/phenocam.svg";
import { ReactComponent as SvgPhotopoint } from "../../assets/icons/photopoint.svg";

const CustomSelectOption = (props) => {
  const { Option } = components;

  const optionSVGs = {
    lai: SvgLai,
    panorama: SvgPanoramic,
    phenocam: SvgPhenocam,
    photopoint: SvgPhotopoint,
  };
  const Icon = optionSVGs[props.data.value];

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Option {...props}>
      <div className="input-select__single-value">
        {Icon && (
        <span className={`svg-icon2 svg-icon-${props.data.value}`}>
          <Icon />
        </span>
        )}
        <span>{`${props.data.label} (${props.data.count})`}</span>
      </div>
    </Option>
  );
};

export default CustomSelectOption;
