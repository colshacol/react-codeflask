import React from "react"
import CodeFlask from "codeflask"

class CodeFlaskReact extends React.Component {
  componentDidMount() {
    this.codeFlask = new CodeFlask(`#${this.props.id}`, {
      language: this.props.language
    })

    if (this.props.code) {
      this.codeFlask.updateCode(this.props.code)
    }

    if (this.props.onChange) {
      this.codeFlask.onUpdate(this.props.onChange)
    }

    if (this.props.editorRef) {
      this.props.editorRef(this.codeFlask)
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.code !== this.codeFlask.getCode()) {
      this.codeFlask.updateCode(newProps.code)
    }
  }

  render() {
    return <div id={this.props.id} />
  }
}

CodeFlaskReact.defaultProps = {
  id: "react-codeflask-root",
  language: "js"
}

export { CodeFlaskReact }
