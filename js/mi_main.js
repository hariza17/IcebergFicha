'use strict';
//  Author: Hernando Clareth Ariza Perez
//  index.html scripts
//

(function ($) {

	$(document).ready(function () {




		var form = $("#mi-wizard");
		var form2 = $("#form2");
		if (localStorage.getItem('iceberg_contador') != undefined) {
			$('#total_add').text(localStorage.getItem('iceberg_contador'));
		}


		form.children(".wizard").steps({
			headerTag: ".wizard-section-title",
			stepsOrientation: "vertical",
			bodyTag: ".wizard-section",
			labels: {
				next: "Siguiente",
				previous: "Anterior",
				finish: "Finish"
			},
			onStepChanging: function (event, currentIndex, newIndex) {
				form.validate().settings.ignore = ":disabled,:hidden";
				return form.valid();
			},
			onFinishing: function (event, currentIndex) {
				form.validate().settings.ignore = ":disabled";
				return form.valid();
			},
			onFinished: function (event, currentIndex) {
				var contador = 0;
				if (localStorage.getItem('iceberg_contador') != undefined) {

					contador = parseInt(localStorage.getItem('iceberg_contador'));
					var suma = contador + 1;
					console.log(suma);
					localStorage.setItem('iceberg_contador', suma);
					$('#total_add').text(localStorage.getItem('iceberg_contador'));


				} else {
					var suma = parseInt(contador + 1);
					//console.log(suma);
					localStorage.setItem('iceberg_contador', suma);
					$('#total_add').text(suma);
					console.log("aqui");
				}
				guardarInformacion(form);
				location.reload();

			}
		});

		$('.datetimepicker').datetimepicker({
			defaultDate: Date.now(),
			pickDate: true,
			pickTime: false
		});


		$('#btnCrearParticipante').magnificPopup({
			removalDelay: 300,
			items: {
				src: "#modal-form-crear-participante"
			},
			mainClass: "mfp-zoomIn",
			midClick: true
		});
		var contar = 0;
		form2.on("submit", function (e) {
			contar += 1;
			$('#contar_participante').text(contar);
			e.preventDefault();
			var datos = JSON.stringify(form2.serializeArray());
			var id = "participante_" + contar + "_" + $('#identificacion').val();
			localStorage.setItem(id, datos);
			$(".mfp-content").click();
		});

		//dsajgkjsd
		var tags_array = [
			{
				"value": 1,
				"text": "Jugando con valores"

			},
			{
				"value": 2,
				"text": "Valorarte"

			},
			{
				"value": 3,
				"text": "Fotosintesis"
			},
			{
				"value": 4,
				"text": "Corresponsales comunitarios"
			},
			{
				"value": 5,
				"text": "Me divierto y aprendo"
			},
			{
				"value": 6,
				"text": "Creciendo en casa"
			},
			{
				"value": 7,
				"text": "Los años maravillosos"
			},
			{
				"value": 8,
				"text": "Vocacional"
			},
			{
				"value": 9,
				"text": "Gestion social de pescadores"
			},
			{
				"value": 10,
				"text": "Empleados de AIB"
			}
			];

		var elt = $('#programas');
		elt.tagsinput({
			itemValue: 'value',
			itemText: 'text',
			typeahead: {
				afterSelect: function (val) {
					this.$element.val("");
				},
				displayKey: 'text',
				source: tags_array
			}
		});


	});

	function guardarInformacion(form) {

		//var datos = JSON.stringify(form.serializeArray());
		//console.log(datos);




	}


})(jQuery);
