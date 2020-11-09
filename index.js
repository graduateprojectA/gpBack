import React, {useState} from "react";
import timetable from "./timetable.PNG"
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivTimetable = styled.div`
  width: 400px;
  height: 700px;
  backgroundImage:\`url(${timetable})\`,
  backgroundRepeat: none;
  backgroundSize: cover;
`;

const Button = styled.button`
  position: relative;
  width: 64px;
  height: 64px;
  left: 25px;
  top: 176px;
  background: #ffd747;
  border-radius: 30px;
`;

const Nav = () => {
    const [form, setForm] = useState({
        enter: "",
        reEnter: "",
    });
    const { enter, reEnter } = form;
    return (
        <div>
            <div style = {{
                width: '400px',
                height: '700px',
                backgroundImage:`url(${timetable})`,
                backgroundRepeat: 'none',
                backgroundSize: 'cover'
            }}>
                <button style = {{
                    width: '70px',
                    height: '51px',
                    backgroundColor: 'blue',
                    marginLeft: '180px',
                    marginTop: '30px',
                    border: '0px',
                    color: 'white'
                }}>
                    a
                </button>
                <button style = {{
                    width: '70px',
                    height: '51px',
                    backgroundColor: 'blue',
                    marginLeft: '180px',
                    marginTop: '130px',
                    border: '0px',
                    color: 'white'
                }}>
                    b
                </button>
            </div>

            {/*<DivTimetable/>*/}
                {/*<Link to="/Main">*/}
                {/*    <Button />*/}
                {/*</Link>*/}
                {/*<br />*/}
                {/*<Link to="/Search">*/}
                {/*    <Button />*/}
                {/*</Link>*/}
                {/*<br />*/}
                {/*<Link to="Grouping">*/}
                {/*    <Button />*/}
                {/*</Link>*/}
        </div>
    );
};
export default Nav;