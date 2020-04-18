import React, { Component } from "react";
import CodeFlask from "codeflask";

interface Props {
  code: string;
  editorRef: (codeFlask: CodeFlask) => void;
  id: string;
  language: string;
  onChange: () => void;
  readonly?: boolean;
}

class CodeFlaskReact extends Component<Props> {
  static defaultProps = {
    id: "react-codeflask-root",
    language: "js",
    readonly: false,
    onChange: (): void => undefined,
  };

  private codeFlask?: CodeFlask;

  public componentDidMount(): void {
    const { code, editorRef, id, language, onChange, readonly } = this.props;
    this.codeFlask = new CodeFlask(`#${id}`, {
      language: language,
      readonly: readonly,
    });

    if (code) {
      this.codeFlask.updateCode(code);
    }

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
