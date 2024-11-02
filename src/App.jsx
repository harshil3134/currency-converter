import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyinfo from './hooks/useCurrencyinfo';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedamount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedamount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-500 via-teal-400 to-purple-500"
    >
<Analytics />
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Currency Converter
        </h1>
        <p className="text-lg text-white mt-2 opacity-90">
          Real-time conversion at your fingertips
        </p>
      </div>

      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full backdrop-blur-lg border border-gray-200 bg-opacity-70">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          <InputBox
            nlabel="From"
            amount={amount}
            currencyOptions={options}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
            amountDisabled={false}
            currencyDisabled={false}
          />

          <div className="flex justify-center my-2">
            <button
              type="button"
              onClick={swap}
              className="flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-full p-3 shadow-md focus:outline-none transform hover:scale-105"
            >
              ↕️ Swap
            </button>
          </div>

          <InputBox
            nlabel="To"
            amount={convertedamount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled={true}
            currencyDisabled={false}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow-lg transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
