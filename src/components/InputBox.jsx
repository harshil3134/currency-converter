                import React, { useId } from 'react'

                function InputBox({

                
                    nlabel,
                    amount,
                    currencyOptions=[],
                    onAmountChange,
                    onCurrencyChange,     
                    selectedCurrency,
                    amountDisabled=false,
                    currencyDisabled=false,
                    className="",
                }
                ) 
                {
                const id=useId()
                    return (
                    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
                        <div className='w-1-2'>
                        
                            <label htmlFor={id} className='text-black/40 mb-2'>{nlabel}</label>
                            <input type="number" 
                            id={id}
                            className='outline-none w-full bg-transparent py-3 text-black/90'
                        placeholder=''
                           disabled={amountDisabled}
                            value={amount}
                            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                            />
                        </div>
                        <div className='w-1-2 flex flex-wrap justify-end text-right'>
                        <p className="text-black/40 mb-2 w-full">Currency Type</p>
                        <select 
                        value={selectedCurrency}
                        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                        onChange={(e) => onCurrencyChange(e.target.value)}

                        disabled={currencyDisabled}
                        >
                {
                    console.log("opt",currencyOptions)
                }

                {
                currencyOptions.map((currency)=>(

                    <option key={currency} value={currency}>{currency}</option>
                    ))
                }

                        </select>
                        </div>

                    </div>
                )
                }

                export default InputBox