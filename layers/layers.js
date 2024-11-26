var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_data_devoir_carte_thematique__province_marrakech_safi_jointure_1 = new ol.format.GeoJSON();
var features_data_devoir_carte_thematique__province_marrakech_safi_jointure_1 = format_data_devoir_carte_thematique__province_marrakech_safi_jointure_1.readFeatures(json_data_devoir_carte_thematique__province_marrakech_safi_jointure_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_devoir_carte_thematique__province_marrakech_safi_jointure_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_devoir_carte_thematique__province_marrakech_safi_jointure_1.addFeatures(features_data_devoir_carte_thematique__province_marrakech_safi_jointure_1);
var lyr_data_devoir_carte_thematique__province_marrakech_safi_jointure_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_data_devoir_carte_thematique__province_marrakech_safi_jointure_1, 
                style: style_data_devoir_carte_thematique__province_marrakech_safi_jointure_1,
                popuplayertitle: "data_devoir_carte_thematique__province_marrakech_safi_jointure",
                interactive: true,
                title: 'data_devoir_carte_thematique__province_marrakech_safi_jointure'
            });
var format_Data_Devoir_Carte_ThematiqueLimite_Maroc_2 = new ol.format.GeoJSON();
var features_Data_Devoir_Carte_ThematiqueLimite_Maroc_2 = format_Data_Devoir_Carte_ThematiqueLimite_Maroc_2.readFeatures(json_Data_Devoir_Carte_ThematiqueLimite_Maroc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Devoir_Carte_ThematiqueLimite_Maroc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Devoir_Carte_ThematiqueLimite_Maroc_2.addFeatures(features_Data_Devoir_Carte_ThematiqueLimite_Maroc_2);
var lyr_Data_Devoir_Carte_ThematiqueLimite_Maroc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Devoir_Carte_ThematiqueLimite_Maroc_2, 
                style: style_Data_Devoir_Carte_ThematiqueLimite_Maroc_2,
                popuplayertitle: "Data_Devoir_Carte_Thematique — Limite_Maroc",
                interactive: true,
                title: '<img src="styles/legend/Data_Devoir_Carte_ThematiqueLimite_Maroc_2.png" /> Data_Devoir_Carte_Thematique — Limite_Maroc'
            });
var format_Data_Devoir_Carte_ThematiqueChef_lieu_3 = new ol.format.GeoJSON();
var features_Data_Devoir_Carte_ThematiqueChef_lieu_3 = format_Data_Devoir_Carte_ThematiqueChef_lieu_3.readFeatures(json_Data_Devoir_Carte_ThematiqueChef_lieu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Devoir_Carte_ThematiqueChef_lieu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Devoir_Carte_ThematiqueChef_lieu_3.addFeatures(features_Data_Devoir_Carte_ThematiqueChef_lieu_3);
var lyr_Data_Devoir_Carte_ThematiqueChef_lieu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Data_Devoir_Carte_ThematiqueChef_lieu_3, 
                style: style_Data_Devoir_Carte_ThematiqueChef_lieu_3,
                popuplayertitle: "Data_Devoir_Carte_Thematique — Chef_lieu",
                interactive: true,
                title: 'Data_Devoir_Carte_Thematique — Chef_lieu'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_data_devoir_carte_thematique__province_marrakech_safi_jointure_1.setVisible(true);lyr_Data_Devoir_Carte_ThematiqueLimite_Maroc_2.setVisible(true);lyr_Data_Devoir_Carte_ThematiqueChef_lieu_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_data_devoir_carte_thematique__province_marrakech_safi_jointure_1,lyr_Data_Devoir_Carte_ThematiqueLimite_Maroc_2,lyr_Data_Devoir_Carte_ThematiqueChef_lieu_3];
lyr_data_devoir_carte_thematique__province_marrakech_safi_jointure_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', });
lyr_Data_Devoir_Carte_ThematiqueLimite_Maroc_2.set('fieldAliases', {'fid': 'fid', });
lyr_Data_Devoir_Carte_ThematiqueChef_lieu_3.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_data_devoir_carte_thematique__province_marrakech_safi_jointure_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'TextEdit', 'Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Range', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'TextEdit', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', });
lyr_Data_Devoir_Carte_ThematiqueLimite_Maroc_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_Data_Devoir_Carte_ThematiqueChef_lieu_3.set('fieldImages', {'fid': 'TextEdit', 'Code_Provi': 'TextEdit', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_data_devoir_carte_thematique__province_marrakech_safi_jointure_1.set('fieldLabels', {'Code_Provi': 'inline label - always visible', 'Nom_Provin': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'inline label - always visible', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'no label', });
lyr_Data_Devoir_Carte_ThematiqueLimite_Maroc_2.set('fieldLabels', {'fid': 'no label', });
lyr_Data_Devoir_Carte_ThematiqueChef_lieu_3.set('fieldLabels', {'fid': 'no label', 'Code_Provi': 'no label', 'Nom_Provin': 'inline label - always visible', 'Area': 'no label', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', 'lat': 'no label', 'long': 'no label', });
lyr_Data_Devoir_Carte_ThematiqueChef_lieu_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});