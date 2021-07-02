/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled';
import { useState } from 'react';
import 'xp.css/dist/XP.css';

const Main = () => {
  const [age, setAge] = useState(0);
  const handleChange = (e: any) => {
    setAge(e.target.value);
  };
  const myArray = [Array(2021)];
  const res = myArray.reduceRight((arr, last) => {
    return (arr = arr.concat(last));
  });
  return (
    <>
      <Window style={{ width: 300 }} className="window">
        <div className="title-bar">
          <div className="title-bar-text">How Old Am I?</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>

        <div
          className="window-body"
          style={{
            padding: '0 0 20px',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              margin: '20px 0',
              fontSize: '15px',
            }}
          >
            {age === 0 ? '私は何年生まれですか？' : `私は${age}生まれです`}
          </p>
          <div className="field-row" style={{ justifyContent: 'center' }}>
            <select onChange={(e) => handleChange(e)}>
              {[...Array(2021)].map((_, index) => {
                const ad = <option key="index">西暦 {index + 1} 年</option>;
                return ad;
              })}
              <option>イエス・キリストの誕生</option>
              {[...Array(9999)].map((_, index) => {
                const dc = <option key="index">紀元前 {index + 1}</option>;
                const reverseDc = [dc].reverse();
                return reverseDc;
              })}
              <option>紀元前10千年紀</option>
            </select>
          </div>
        </div>
      </Window>
    </>
  );
};

export default Main;

const Window = styled.div`
  transform: scale(1);
`;
