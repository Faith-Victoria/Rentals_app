frappe.ui.form.on("Vehicle", {
	refresh(frm) {

	},
    get_summary(frm){
        frm.get_field("summary").$wrapper.append("<h1>I love you, O LORD my strength</h1>");
    },
});
