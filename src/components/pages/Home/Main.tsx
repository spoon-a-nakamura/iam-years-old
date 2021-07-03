/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled';
import { useState } from 'react';
import 'xp.css/dist/XP.css';

const Main = () => {
  const [age, setAge] = useState(0);
  const handleChange = (e: any) => {
    setAge(e.target.value);
  };
  const ad = [...Array(2021)].map((_, index) => {
    <option key="index">西暦 {index + 1} 年</option>;
  });
  const reverseAd = ad.reverse();
  const dc = [...Array(9999)].map((_, index) => {
    <option key="index">紀元前 {index + 1}</option>;
  });
  const reverseDc = dc.reverse();

  return (
    <>
      <Window className="window">
        <TitleBar className="title-bar">
          <div className="title-bar-text">How Old Am I?</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </TitleBar>

        <WindowBody className="window-body">
          <Iam>
            {age === 0 ? '私は何年生まれですか？' : `私は${age}生まれです`}
          </Iam>
          <div className="field-row" style={{ justifyContent: 'center' }}>
            <select onChange={(e) => handleChange(e)}>
              {reverseAd}
              <option>イエス・キリストの誕生</option>
              {reverseDc}
              <option>紀元前10千年紀</option>
            </select>
          </div>
        </WindowBody>
      </Window>
    </>
  );
};

export default Main;

const Window = styled.div`
  width: 90%;
  max-width: 700px;
`;
const WindowBody = styled.div`
  padding: 0 0 20px;
`;
const TitleBar = styled.div`
  padding: 5px;
  height: fit-content;
`;
const Iam = styled.p`
  text-align: center;
  margin: 20px 0;
  font-size: 15px;
`;
