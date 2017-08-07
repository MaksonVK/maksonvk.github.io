function createSong(){
	let container = document.createElement('div');
	let playButton = document.createElement('button');
	playButton.innerHTML = 'Play';
	let name = document.createElement('span');
	name.innerHTML = 'Song Name and artist';

	container.appendChild(playButton);
	container.appendChild(name);

	document.body.appendChild(container);
}

function createAudio(){
	let audio = document.createElement('audio');
	audio.setAttribute('controls', 'controls');
	audio.id = 'audio';

	let source = document.createElement('source');
	source.setAttribute('src', 'https://strm.yandex.ru/get/Hxtu01NhbHRlZF9fE9iM9Uh8QBlQ_N14GmAjvnIOfLgKnuKH1oCFnjzSZaBTCu1iM9ac0cBa9tB1wnkVJBll07BGXHwO9JPg5AcQDvPgZ8qDQtB0jFmoSxRs_QVZLP12tgUwhk4N_dPCD6E2C3p3xIyvB2ZFn9LzR2Fw-9GFbIq9Myuj_O02q3mQ1wunpR7XW8XJBrUGLTmdzrxock5VN5nNd_2YaH15b4Hh2X3QO61UIdqJDaJEGbZBkiq9xPy-cGCuTpnf5nBiSR-V28X9zdXwWSZ2vcidVuF9MYlItdvwB7BCkq6tqsgEZDPzithIXsgJsvLUM3ZZH23U44xGEEMEzSlr9ux6AP4yY-Jnr87ncqjCGEC6kFI5vh5dB-LIGZ_FmK8iVtq7LIDxopbgP90fDIjI72aH2YuaRH77byWyTlJVnO47BQLWR_or_K84yjjtSKAmaVnCi3P8OgLE795Iwqf-Fp0Xp8K84FGOwhL3TgVZGsv5jpF60MmoMnRsiPUv1sRq4hNSFq0cM_6sd46xInBihRqyCPV60D_CipVOVzsewFpq3CfRw_e_cFRlH7FOBHUCKlTd32Hleqz9UdPgzp9P6Jel2mNk-InVmGprySY5z-R6cYWura7IkSx4n8iruG9FYxsTq3ljiwWy7ERwsYHFfPDW68EPbVelZIB5lsQMLCanEe4i7yiTOViRsyBlv_IRan141Wn3ZUiZXfj__j2gMq5aJd8FzO-OLvKngXPnRiudEI9zO-xb3L-vKOObf2dXC8j8sJmEl9XykYtH-W_eFSVXUt_46G6dsGBcIIZPo4W2oTCHrpT0VwqmuQqV_2ZUMs5D63uYxrv5LCeoViViv6ISsb-KpkVZ2p23UMlY_AQjNA7DktlTsley0fjWDegVliaxT4cK0e8KCXNjrW_s3fit4Zc7uqb5QOtugiFYrH14kLvwuriUlC9li3Aa_ywRtzsL0rAyU_3fqfZe5XQuePANQtwhzCiN9NrzVAlv?ts=5988b10f&sign=fa093fc348b95f1ff58b0773e221177f');
	source.setAttribute('type', 'audio/mpeg');
	source.id = 'audioSource';

	audio.appendChild(source);

	document.body.appendChild(audio);
}

createSong();
createAudio();

$('button').on('click', function(){
	console.log('lalka');

	var audio = document.getElementById('audio');
	var source = document.getElementById('audioSource');
	source.src = 'https://strm.yandex.ru/get/HcQqm1NhbHRlZF9fjybtVQ33B7f2gnxtR6TjeTX_OZediwl-U_rjr02hN-8bYIOdOKQyK6WztISYQSO6GCRhKFClN6n6AwMAIy-9Ki17lKXFjF99Uv2DuaCuL0GI2Y5Lozyw00S0lvO8xJWVAs-ZqkBsEEPMMXOEhXLL4w7RU6KyER5OQfZhCKf4ThTOc-pu9uUUZTL0W2ucfVMAbjXw7QBRRQA4kHA-UOW_SXZ2xS5CfxnjD4oDsH669wk_4URSvBhFMgK-XZoJH4khTgFmmgGe5E_svVxFoq5XreHbHSLFLDXtftNZxuEqKgPeECYIDEUiGW7n_6jgPMWRKSOlDk-_dQfxLjvzdH9J2m01JewmC021TPzZjo11IKNEi4gOMpCm3SJ63K5MDirZSV35eky-_0tgGtMtyaInwcWG-Yamx4y3zt3dpAZAd_-Z_jiETiuZ1kPZl2MdTSDhoMDwYHkzlYX_1l60OCyFMXgFcPoDEMf8eFZopqJnMQB8rkqSaViAzWRVXp5ogseE3uCAIwYoubvk2YUQu_tRMv2E_39KcFMQjvwtyqTGL-_vIcdiW77L6OmJGqb37flNEcsgtJc7NjOKkmuxXD3i1JVnt-z4GculXXF_Vu9iJFEPe9Pfhf3gS05l9uHyPYu4aw9K7n_K8nOO516eXu3NbKE9ZqkYn-3-PTMjo_7c4KNyd2id1cLOyz9O8H5sCXMv86qoTT22uUD3VmoeUsI5lOEyeCIh8QX2s6jSfOxcZK7LTT0nS8k-TLrbjNvy8jZse1xrkDemTkBW8PA5tsPfK16jYGdrJJ4FvrPZZ6PR9fnAdfiyvEq46Ts9koWh6bajeftId0hWIBgd5jENvxlYBq5K4xANP0vhgbK6Zg0UgLKnOkHOyNMh_qR0wSTvDba79BZ-dTqdNCvoP-emU8wuTtRhME1qEaVaAGJ_YoIQ9GWpk6mzYrJDoJR_3j0Zx8ACiqS2vbSsADkGVLqDCLosJyKygV9YYyKr?ts=5988b50e&sign=97641dd9ae88c0e7e779d84b178f0ea1';

	audio.load();
	audio.play();

});
