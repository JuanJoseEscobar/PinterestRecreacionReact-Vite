import "./Style.scss";

export const CreatePin = () => {
  return (
    <div className="CreateContent">

        <div className="CardContent">

            <div className="CardHeader">

                <div className="OptionsBtn">
                    <svg
                    className="Options"
                    version="1.1"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    >
                        <path fill="#767676" d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" ></path>
                    </svg>
                </div>

                <div className="SaveContent">
                    <div className="NameSaveContent">
                        <span>Hollow</span>
                        <svg
                        className="Options"
                        version="1.1"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        >
                            <path  d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" ></path>
                        </svg>
                    </div>
                    <div className="saveBtn">
                        <span>Guardar</span>
                    </div>
                </div>


            </div>

        </div>

    </div>
  );
};
