import React, { Component } from "react";
import CodeFlask, { options } from "codeflask";

interface Props extends options {
  code: string;
  editorRef?: (codeFlask: CodeFlask) => void;
  id?: string;
  onChange?: (code: string) => void;
}

class CodeFlaskReact extends Component<Props> {
  static defaultProps = {
    id: "react-codeflask-root",
  };

  private codeFlask?: CodeFlask;

  public componentDidMount(): void {
    const { code, editorRef, id, onChange, ...options } = this.props;
    this.codeFlask = new CodeFlask(`#${id}`, options);

    this.codeFlask.updateCode(code);

    if (onChange) {
      this.codeFlask.onUpdate(onChange);
    }

    if (editorRef) {
      editorRef(this.codeFlask);
    }
  }

  public componentWillReceiveProps(newProps: Props): void {
    if (!this.codeFlask) {
      return;
    }

    if (newProps.code !== this.codeFlask.getCode()) {
      this.codeFlask.updateCode(newProps.code);
    }
  }

  public render(): JSX.Element {
    const { id } = this.props;
    return <div id={id} />;
  }
}

export { CodeFlaskReact };
