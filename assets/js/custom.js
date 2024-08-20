jQuery(function($) {
	//menu bar
	const $btnOpen = $(".menu-open")
	const $btnClose = $(".menu-close");
	var $menuBar = $(".menu")
	$btnOpen.click(function(e) {
		e.preventDefault();
		$menuBar.addClass("show");
	});

	$btnClose.click(function(e) {
		e.preventDefault();
		$menuBar.removeClass("show");
	});

	$(document).click(function(e) {
		if (!$(e.target).closest('.menu, .menu-open').length) {
			$menuBar.removeClass("show");
		}
	});

	// password field
    $(".toggle-password").click(function(){
		var input = $(".password-field");
		if (input.attr("type") === "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});

	//
	const $dateSelect = $("#date");
	const $monthSelect = $("#month");
	const $yearSelect = $("#year");

	for (let i = 1; i <= 12; i++) {
        const $option = $("<option></option>").val(i).text(i);
        $monthSelect.append($option);
    }
	
	const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const $option = $("<option></option>").val(i).text(i);
        $yearSelect.append($option);
    }

	function updateDays() {
        $dateSelect.empty();

        const month = $monthSelect.val();
        const year = $yearSelect.val();

        const daysInMonth = new Date(year, month, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            const $option = $("<option></option>").val(i).text(i);
            $dateSelect.append($option);
        }
    }
    $monthSelect.on("change", updateDays);
    $yearSelect.on("change", updateDays);

    updateDays();
});


