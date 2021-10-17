
const RomanianPanel = ({ handleClick }) => {

  return (
    <div className="text-center flex justify-center" id="romanianCalculator">
      <div className="w-4/5 sm:w-1/2 lg:w-1/4 text-2xl">
        <div className="flex">
          <button
            className="w-2/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("AC")}
          >
            AC
          </button>
          <span className="w-1/4 bg-gray-100 border-2 border-gray-200"></span>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("/")}
          >
            &divide;
          </button>
        </div>

        <div className="flex">
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("M")}
          >
            M
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("D")}
          >
            D
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("C")}
          >
            C
          </button>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("*")}
          >
            &times;
          </button>
        </div>

        <div className="flex">
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("L")}
          >
            L
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("X")}
          >
            X
          </button>
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("V")}
          >
            V
          </button>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("-")}
          >
            -
          </button>
        </div>

        <div className="flex">
          <button
            className="w-1/4 bg-gray-50 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("I")}
          >
            I
          </button>
          <span
            className="w-1/4 bg-gray-50 border-2 border-gray-200"></span>
          <button
            className="w-1/4 bg-blue-400 hover:bg-blue-500 py-3 border-2 border-gray-200"
            onClick={() => handleClick("=")}
          >
            =
          </button>
          <button
            className="w-1/4 bg-gray-100 hover:bg-gray-400 py-3 border-2 border-gray-200"
            onClick={() => handleClick("+")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
};

export default RomanianPanel;
