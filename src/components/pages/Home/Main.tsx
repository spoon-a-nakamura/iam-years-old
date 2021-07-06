/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import 'xp.css/dist/XP.css';

const Main = () => {
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const target = document.querySelector('.window'); // nullの可能性をどうしたらよいのか
    const targetHeight = target.clientHeight;
    setHeight(targetHeight);
  }, []);

  const removeWindow = (e: any) => {
    const target = e.target.parentNode.parentNode.parentNode;
    target.style.opacity = '0';
    target.style.visibility = 'hidden';
  };

  const hideWindow = (e: any, confirm: boolean = false) => {
    const target = e.target.parentNode.parentNode.parentNode;
    target.style.height = '32px';
    target.style.width = 'fit-content';
    target.style.bottom = '0';
    target.style.top = 'initial';
    target.style.left = confirm ? 'initial' : '0';
    target.style.right = confirm ? '0' : 'initial';
    target.style.transform = confirm ? 'translate(0, 0)' : 'initial';
    target.style.zIndex = confirm ? '1' : '2';
  };

  const showWindow = (e: any, confirm: boolean = false) => {
    const target = e.target.parentNode.parentNode.parentNode;
    target.style.height = `${height}px`;
    target.style.width = confirm ? '85%' : '90%';
    target.style.bottom = 'initial';
    target.style.top = confirm ? '50%' : 'initial';
    target.style.left = confirm ? '50%' : 'initial';
    target.style.right = 'initial';
    target.style.transform = confirm ? 'translate(-45%, -55%)' : 'initial';
    target.style.zIndex = confirm ? '2' : '1';
  };

  const handleChange = (e: any) => {
    setAge(e.target.value);
  };

  const ad = [...Array(2022)].map((_, index) => {
    return <Option key={index}>{index}年</Option>;
  });
  const reverseAd = ad.reverse();
  const dc = [...Array(999999)].map((_, index) => {
    return <Option key={index}>紀元前{index + 1}年</Option>;
  });
  // const dcThousands = [...Array(99)].map((_, index) => {
  //   return <Option key={index}>紀元前{index + 1},000年</Option>;
  // });
  // const tenThousands = [...Array(9)].map((_, index) => {
  //   return <Option key={index}>紀元前{index + 1}00,000年</Option>;
  // });
  const million = [...Array(99)].map((_, index) => {
    return <Option key={index}>紀元前{index + 1},000,000年</Option>;
  });
  const oneHundredMillion = [...Array(9)].map((_, index) => {
    return <Option key={index}>紀元前{index + 1}00,000,000年</Option>;
  });
  const billion = [...Array(46)].map((_, index) => {
    return <Option key={index}>紀元前{index + 1},000,000,000年</Option>;
  });

  return (
    <>
      <Window className="window" id="window">
        <TitleBar className="title-bar">
          <TitleBarText className="title-bar-text">
            My birth year is
          </TitleBarText>
          <TitleBarControls className="title-bar-controls">
            <Button aria-label="Minimize" onClick={(e) => hideWindow(e)} />
            <Button aria-label="Maximize" onClick={(e) => showWindow(e)} />
            <Button aria-label="Close" onClick={(e) => removeWindow(e)} />
          </TitleBarControls>
        </TitleBar>

        <WindowBody className="window-body">
          <Iam>
            {age === null
              ? 'あなたは何年生まれですか？'
              : `私は${age}生まれです`}
          </Iam>
          <FieldRow className="field-row">
            <Select onChange={(e) => handleChange(e)}>
              <Option>-</Option>
              {reverseAd}
              {dc}
              {/* {dcThousands} */}
              {/* {tenThousands} */}
              {million}
              {oneHundredMillion}
              {billion}
              {/* <Option>----------</Option>
              <Option>イエス・キリスト生誕👶</Option>
              <Option>恐竜誕生🦕 2億3000万年前</Option>
              <Option>カンブリア爆発💥 5億4000万年前</Option>
              <Option>起源生物誕生🦠 35億年前</Option>
              <Option>地球誕生🌏 45億5000万年前</Option> */}
            </Select>
          </FieldRow>
        </WindowBody>
      </Window>
      {age === '0年' && (
        <Confirm className="window" id="confirm">
          <TitleBar className="title-bar">
            <TitleBarText className="title-bar-text">
              You may be ......
            </TitleBarText>
            <TitleBarControls className="title-bar-controls">
              <Button
                aria-label="Minimize"
                onClick={(e) => hideWindow(e, true)}
              />
              <Button
                aria-label="Maximize"
                onClick={(e) => showWindow(e, true)}
              />
              <Button aria-label="Close" onClick={(e) => removeWindow(e)} />
            </TitleBarControls>
          </TitleBar>

          <ConfirmBody className="window-body">
            <Iam>
              {age === '0年' && 'あなたはキリストですか？'}
              {age === '紀元前46,000,000,000年' && 'あなたはジ・アースですか？'}
            </Iam>
            {/* <FieldRow className="field-row">
              <Button>はい</Button>
              <Button>いいえ</Button>
            </FieldRow> */}
          </ConfirmBody>
        </Confirm>
      )}
    </>
  );
};

export default Main;

const Window = styled.div`
  width: 90%;
  max-width: 700px;
  overflow: hidden;
  position: absolute;
`;
const WindowBody = styled.div`
  padding: 0 0 20px;
`;
const TitleBar = styled.div`
  padding: 5px;
  height: fit-content;
`;
const TitleBarText = styled.h2`
  font-size: 16px;
`;
const TitleBarControls = styled.div``;
const Button = styled.button``;
const Iam = styled.p`
  text-align: center;
  margin: 20px 0;
  font-size: 15px;
`;
const FieldRow = styled.div`
  justify-content: center;
`;
const Select = styled.select`
  font-size: 16px;
  font-weight: normal;
  height: 1.8em;
  background-position: center right 2px;
  background-size: auto 80%;
`;
const Option = styled.option``;
const Confirm = styled.div`
  width: 85%;
  max-width: 700px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -55%);
`;
const ConfirmBody = styled.div`
  padding: 10px 0;
`;
