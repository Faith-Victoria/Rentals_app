# Copyright (c) 2025, FVS and contributors
# For license information, please see license.txt

import frappe


def execute(filters=None):
	columns =[{
		"fieldname": "make",
		"Label": "Make",
		"fieldtype": "Data"
	},{
		"fieldname": "total_revenue",
		"Label": "Total Revenue",
		"fieldtype": "currency"
		
	},]
	
	data = frappe.get_all("Ride Booking",
	fields =["SUM(total_amount) AS total_revenue", "vehicle.make"],
	filters ={"docstatus":1}, group_by="make"
	)
	chart ={
		"data" :{
			"labels": [x.make for x in data],
			"datasets": [{"values": [x.total_revenue for x in data]}],
		},
		"type": "pie"
	}
	return columns, data, "Here is the report chart", chart, 
