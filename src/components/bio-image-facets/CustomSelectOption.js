import React from "react";
import PropTypes from "prop-types";
import { components } from "react-select";
import "./ImageTypeSelectFacet.scss";
import { ReactComponent as SvgLai } from "../../assets/icons/LAI.svg";
import { ReactComponent as SvgPanoramic } from "../../assets/icons/panoramic.svg";
import { ReactComponent as SvgPhenocam } from "../../assets/icons/phenocam.svg";
import { ReactComponent as SvgPhotopoint } from "../../assets/icons/photopoint.svg";
import { ReactComponent as SvgAncillaryFauna } from "../../assets/icons/ancillary-fauna.svg";
import { ReactComponent as SvgAncillaryFlora } from "../../assets/icons/ancillary-flora.svg";
import { ReactComponent as SvgAncillaryFungi } from "../../assets/icons/ancillary-fungi.svg";
import { ReactComponent as SvgAncillaryGeneral } from "../../assets/icons/ancillary-general.svg";
import { ReactComponent as SvgAncillaryCameraTrap } from "../../assets/icons/ancillary-camera-trap.svg";

const CustomSelectOption = (props) => {
  const { Option } = components;

  const { data } = props;

  const optionSVGs = {
    lai: SvgLai,
    panorama: SvgPanoramic,
    phenocam: SvgPhenocam,
    photopoint: SvgPhotopoint,
    "ancillary.fauna": SvgAncillaryFauna,
    "ancillary.flora": SvgAncillaryFlora,
    "ancillary.fungi": SvgAncillaryFungi,
    "ancillary.general": SvgAncillaryGeneral,
    "ancillary.samford camera trap": SvgAncillaryCameraTrap,
  };
  const Icon = optionSVGs[data.value];
  const cssClassName = data.value.replace(/[\W_]/g, "-");

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Option {...props}>
      <div className="input-select__single-value">
        {Icon && (
          <span className={`svg-icon2 svg-icon-${cssClassName}`}>
            <Icon />
          </span>
        )}
        <span>{`${data.label} (${data.count})`}</span>
      </div>
    </Option>
  );
};

CustomSelectOption.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CustomSelectOption;
