// Copyright (c) 2025, FVS and contributors
// For license information, please see license.txt

 frappe.ui.form.on("Ride Order", {

    onload(frm) {
        console.log("Loading form ...");
    },

	refresh(frm) {
    console.log("On refresh ...");
        if (frm.doc.status === "Accepted") {
            frm.add_custom_button("Accept", ()=>{
                frm.set_value ("status", "Accepted")
                frm.save()
                },"Actions")
         
            frm.add_custom_button("Reject", ()=>{
                frm.set_value ("status", "Rejected")
                frm.save()
                }, "Actions")
            }
    },
    status(frm) {
        console.log("Status changed"); 
    }, 
});
 