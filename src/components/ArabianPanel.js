
const ArabianPanel = ({ handleClick }) => {

  return (
    <div className="text-center flex justify-center" id="standardCalculator">
      <div className="w-4/5 sm:w-1/2 lg:w-1/4 text-2xl">
        <div className="flex">
          <button
            className="w-2/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200" value="all-clear"
            onClick={() => handleClick("AC")}
          >
            AC
          </button>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200" value="back"
            onClick={() => handleClick("back")}
          >
            <svg className="w-1/4 m-auto svg-inline--fa fa-backspace fa-w-20 fa-2x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="backspace" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M469.66 181.65l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0L384 233.37l-63.03-63.03c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31L361.38 256l-63.03 63.03c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0L384 278.63l63.03 63.03c3.12 3.12 8.19 3.12 11.31 0l11.31-11.31c3.12-3.12 3.12-8.19 0-11.31L406.63 256l63.03-63.03a8.015 8.015 0 0 0 0-11.32zM576 64H205.26C188.28 64 172 70.74 160 82.74L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm32 320c0 17.64-14.36 32-32 32H205.26c-8.55 0-16.58-3.33-22.63-9.37L32 256l150.63-150.63c6.04-6.04 14.08-9.37 22.63-9.37H576c17.64 0 32 14.36 32 32v256z"></path></svg>
          </button>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200" value="/"
            onClick={() => handleClick("/")}
          >
            &divide;
          </button>
        </div>

        <div className="flex">
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="7"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="8"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="9"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200" value="*"
            onClick={() => handleClick("*")}
          >
            &times;
          </button>
        </div>

        <div className="flex">
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="4"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="5"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="6"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200" value="-"
            onClick={() => handleClick("-")}
          >
            -
          </button>
        </div>

        <div className="flex">
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="1"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="2"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="3"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200" value="+"
            onClick={() => handleClick("+")}
          >
            +
          </button>
        </div>

        <div className="flex">
          <button
            className="w-2/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="0"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200" value="."
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button
            className="w-1/4 bg-blue-400 hover:bg-blue-500 py-3 border-2 border-gray-200" value="="
            onClick={() => handleClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  )
};

export default ArabianPanel;
