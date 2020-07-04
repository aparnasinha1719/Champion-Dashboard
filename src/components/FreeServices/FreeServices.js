import React from 'react';
import { cardData } from './FreeServicesConfig';
import WrapperCard from '../Cards/WrapperCard/WrapperCard';
import DescriptionCard from '../Cards/DescriptionCard/DescriptionCard';

const FreeServices = () => {
	return (
		<WrapperCard title={cardData.title}>
			{cardData.data.map((value,index) => (
				<DescriptionCard cardData={value} key={index}></DescriptionCard>
			))}
		</WrapperCard>
	);
};

export default FreeServices;
