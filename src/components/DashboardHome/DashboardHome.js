import React, { Component } from 'react'
import FreeServices from '../FreeServices/FreeServices'
import LocationTable from '../DashboardTable/LocationTable/LocationTable'
import ProductTable from '../DashboardTable/ProductTable/ProductTable'
import YourBrand from '../YourBrand/YourBrand'
import TeamMemberTable from '../DashboardTable/TeamMembersTable/TeamMembersTable'
export class DashboardHome extends Component {
    render() {
        return (
            <div>
                <FreeServices></FreeServices>
                <LocationTable></LocationTable>
                <ProductTable></ProductTable>
                <TeamMemberTable></TeamMemberTable>
                <YourBrand></YourBrand>
            </div>
        )
    }
}

export default DashboardHome
