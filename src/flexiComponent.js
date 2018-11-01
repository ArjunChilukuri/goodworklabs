import React from "react";

	const  flexiComponent = props => {
		const dropdown = value => {value.map(opt => {return (<option>opt</option>);});};
           const  flexiHtml  =props.config.items.map(item => {
			   return (
					   <div>
			           <div key={item.key}>
			   		   <label>{item.label}</label>
			   		   <item.type name={item.name} values={item.values} />
					   </div>
					   </div>
						);
						 });

			return (
				<div>
				{flexiHtml}
			<button type="submit" value="Submit" onSubmit={props.onSubmit}>Submit</button>
				</div>
			);
};

export default flexiComponent;
