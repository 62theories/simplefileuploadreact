import React, { useState } from "react"

const App = () => {
    const [files, setFiles] = useState([])

    return (
        <div style={{ minHeight: "100vh" }}>
            <input
                type="file"
                onChange={(e) => {
                    setFiles([...files, ...e.target.files])
                }}
            />
            {files.map((file, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                        }}
                    >
                        <div
                            style={{
                                border: "2px solid black",
                                padding: "15px",
                                margin: "15px",
                            }}
                        >
                            <div>file name: {file.name}</div>
                            <div>
                                <button
                                    onClick={() => {
                                        if (file) {
                                            const url = window.URL.createObjectURL(
                                                file
                                            )
                                            const a = document.createElement(
                                                "a"
                                            )
                                            a.style.display = "none"
                                            a.href = url
                                            // the filename you want
                                            a.download = file.name
                                            document.body.appendChild(a)
                                            a.click()
                                            a.remove()
                                            window.URL.revokeObjectURL(url)
                                        }
                                    }}
                                >
                                    download
                                </button>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        setFiles(
                                            files.filter((file, index2) => {
                                                if (index === index2) {
                                                    return false
                                                } else {
                                                    return true
                                                }
                                            })
                                        )
                                    }}
                                >
                                    remove
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div
                style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    margin: "10px",
                }}
            >
                hints
                <div>
                    <a href="https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react">
                        ตัวอย่างการใช้ input รับ file
                    </a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL">
                        file to datauri
                    </a>
                </div>
                <div>
                    <a href="https://stackoverflow.com/questions/3749231/download-file-using-javascript-jquery">
                        use datauri to download
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App
