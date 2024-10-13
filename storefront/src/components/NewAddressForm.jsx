import React from 'react'

function NewAddressForm({ setShowDeiveryTime }) {
    const [hasNewAddress, setHasNewAddress] = React.useState(false)

    const useNewAddreess = () => {
        const form = document.getElementById("new-add-form")

        const newDetails = {
            funllName: form.full_name.value,
            phoneNumber: form.phone_number.value,
            fullAddress: form.full_address.value
        }

        setHasNewAddress(true)
        setShowDeiveryTime(true)

        localStorage.setItem('delivery_details', JSON.stringify({}))
        console.log(newDetails)
    }


    return (<>
        <h1 className='text-lg font-bold'>
            New delivery address
        </h1>
        <form id="new-add-form" className='w-full mt-3  divide-y divide-slate-400'>
            <p>
                <input className="w-full p-2" type="text" name="full_name" placeholder="Enter fullname" />
            </p>
            <p>
                <input className="w-full p-2" type="text" name="phone_number" placeholder="Enter phone number" />
            </p>
            <div>
                <textarea className="w-full p-2" name="full_address" placeholder='Please enter full address'></textarea>

                <p className='flex justify-between'>

                    {!hasNewAddress && <button
                        onClick={useNewAddreess}
                        className='p-3 bg-slate-500 mt-3 rounded-full text-slate-100'
                        type="button">
                        DONE
                    </button>}

                </p>
            </div>
        </form>
    </>
    )
}

export default NewAddressForm