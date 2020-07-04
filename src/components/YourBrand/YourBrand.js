import React from 'react'
import {brandData} from './YourBrandConfig';
import WrapperCard from '../Cards/WrapperCard/WrapperCard';
import DescriptionCard from '../Cards/DescriptionCard/DescriptionCard';

const YourBrand=()=> {
    return (
		<WrapperCard title={brandData.title}>
			{brandData.data.map((value,index) => (
				<DescriptionCard cardData={value} key={index}></DescriptionCard>
			))}
		</WrapperCard>
	);
}

export default YourBrand;