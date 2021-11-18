
const sex= ['male', 'female']

const Selection  = () => {


    
return (
    <>
        <select >
            <option value="">
                Selectsexo
                {sex.map((s)=><option> {s} </option> )}
            </option>
        </select>
    </>
)
}

export default Selection
