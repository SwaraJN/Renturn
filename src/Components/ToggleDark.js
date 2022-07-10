import React from 'react';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';



export default function ToggleDark(props) {
  return (
    <div>
      <div class="wrapper">
        <button id="checkbox-toggle"
            onClick={() => {
              props.toggleDark();
            }}><BrightnessMediumIcon/></button>
      </div>
    </div>
  );
}