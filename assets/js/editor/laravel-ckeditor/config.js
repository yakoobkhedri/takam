/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.extraPlugins = 'html5video,widget,widgetselection,clipboard,lineutils,wordcount';
    config.wordcount = {

// Whether or not you want to show the Paragraphs Count
        showParagraphs: false,

// Whether or not you want to show the Word Count
        showWordCount: false,

// Whether or not you want to show the Char Count
        showCharCount: true,

// Whether or not you want to count Spaces as Chars
        countSpacesAsChars: true,

// Whether or not to include Html chars in the Char Count
        countHTML: false,

// Maximum allowed Word Count, -1 is default for unlimited
//         maxWordCount: 400,

// Maximum allowed Char Count, -1 is default for unlimited
//         maxCharCount: 400
    };
};

