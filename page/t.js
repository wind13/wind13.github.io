jQuery(document).ready(function () {
  jQuery("#nanogallery2").nanogallery2({

    // CONTENT SOURCE
    // The optional add-on nanoPhotosProvider is used for this example - this is not mandatory and can easily be replaced by a list of medias
    kind: 'nano_photos_provider2',
    dataProvider: 'https://nano.gallery/ngy2/demo6/nano_photos_provider2/nano_photos_provider2.php',
    album: 'nature',

    // GALLERY AND THUMBNAIL LAYOUT
    galleryDisplayMode: 'fullContent',
    gallerySorting: 'random',
    thumbnailHeight: 'auto', thumbnailWidth: '300',
    thumbnailBaseGridHeight: 50,
    thumbnailAlignment: 'fillWidth',
    thumbnailL1GutterWidth: 4,
    thumbnailL1GutterHeight: 4,
    thumbnailBorderHorizontal: 5,
    thumbnailBorderVertical: 5,

    // THUMBNAIL TOOLS & LABEL
    thumbnailLabel: { display: true, position: 'onBottom', hideIcons: true, titleFontSize: '1em', align: 'right', titleMultiLine: true, displayDescription: false },
    thumbnailToolbarAlbum: null,
    thumbnailToolbarImage: { bottomRight: 'display' },
    // replace the default DISPLAY tool icon
    icons: { thumbnailDisplay: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i> display' },

    // DISPLAY ANIMATION
    thumbnailDisplayTransition: 'slideDown',
    thumbnailDisplayTransitionDuration: 500,
    thumbnailDisplayInterval: 30,

    // THUMBNAIL'S HOVER ANIMATION
    thumbnailHoverEffect2: 'label_translateY_0px_-20px|image_scale_1.00_1.10|image_rotateZ_0deg_3deg|image_translateY_0px_-20px|tools_opacity_0_1|tools_translateY_30px_0px',
    touchAnimation: true,
    touchAutoOpenDelay: 800,

    // GALLERY THEME
    galleryTheme: {
      thumbnail: { background: '#444', backgroundImage: 'linear-gradient(315deg, #111 0%, #557 90%)', borderColor: '#000', labelOpacity: 1, labelBackground: '#444', titleColor: '#eee', titleBgColor: '#444', titleShadow: '' },
    },

    // DEEP LINKING
    locationHash: false
  });
});
