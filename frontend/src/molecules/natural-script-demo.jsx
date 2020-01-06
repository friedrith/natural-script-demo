import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  setEnglish,
  setExpected,
  parse,
  getEnglish,
  getExpected,
  getOutput,
} from '~state'

import style from './natural-script-demo.style'

const NaturalScriptDemo = () => {
  const dispatch = useDispatch()

  const english = useSelector(getEnglish)
  const expected = useSelector(getExpected)
  const output = JSON.stringify(useSelector(getOutput), null, 2)

  const onEnglishChange = event => {
    dispatch(setEnglish(event.target.value))
    dispatch(parse())
  }

  const onExpectedChange = event => {
    dispatch(setExpected(event.target.value))
    dispatch(parse())
  }

  useEffect(() => {
    dispatch(parse())
  })

  return (
    <div className={style.container}>
      <h1 className={style.title}>Natural Script</h1>
      <label className={style.label} htmlFor="english">
        English
      </label>
      <input
        className={style.input}
        id="english"
        placeholder="My name is Mario"
        onChange={onEnglishChange}
        value={english}
      />
      <label className={style.label} htmlFor="script">
        Script
      </label>
      <input
        className={style.input}
        id="script"
        placeholder="~my name is {word:name}"
        onChange={onExpectedChange}
        value={expected}
      />
      <label className={style.label} htmlFor="output">
        Ouput
      </label>
      <textarea
        className={`${style.textarea} ${output ? style.success : style.error}`}
        id="output"
        readOnly
        value={output}
      />
    </div>
  )
}

NaturalScriptDemo.propTypes = {
  siteTitle: PropTypes.string,
}

NaturalScriptDemo.defaultProps = {
  NaturalScriptDemo: '',
}

export default NaturalScriptDemo
