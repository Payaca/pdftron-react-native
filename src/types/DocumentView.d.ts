
import { PureComponent } from "react";
import { ViewProps } from "react-native";
import * as ConfigOptions from "./ConfigOptions";
import * as AnnotOptions from "./AnnotOptions";

export interface DocumentViewProps extends ViewProps {
    document: string;
    password?: string;
    initialPageNumber?: number;
    pageNumber?: number;
    customHeaders?: object;
    leadingNavButtonIcon?: string;
    showLeadingNavButton?: boolean;
    onLeadingNavButtonPressed?: () => void;
    onDocumentLoaded?: (path : string) => void;
    onDocumentError?: (error: string) => void;
    onPageChanged?: (event: {previousPageNumber: number, pageNumber: number}) => void;
    onScrollChanged?: (event: {horizontal: number, vertical: number}) => void;
    onZoomChanged?: (event: {zoom: number}) => void;
    onZoomFinished?: (event: {zoom: number}) => void;
    zoom?: number;
    disabledElements?: Array<ConfigOptions.Buttons>;
    disabledTools?: Array<ConfigOptions.Tools>;
    longPressMenuItems?: Array<ConfigOptions.LongPressMenu>;
    overrideLongPressMenuBehavior?: Array<ConfigOptions.LongPressMenu>;
    onLongPressMenuPress?: (event: {longPressMenu: string, longPressText: string}) => void;
    longPressMenuEnabled?: boolean;
    annotationMenuItems?: Array<ConfigOptions.AnnotationMenu>;
    overrideAnnotationMenuBehavior?: Array<ConfigOptions.AnnotationMenu>;
    onAnnotationMenuPress?: (event: {annotationMenu: string, annotations: Array<AnnotOptions.Annotation>}) => void;
    hideAnnotationMenu?: Array<ConfigOptions.Tools>;
    overrideBehavior?: Array<ConfigOptions.Actions>;
    onBehaviorActivated?: (event: {action: ConfigOptions.Actions, data: AnnotOptions.LinkPressData | AnnotOptions.StickyNoteData}) => void;
    topToolbarEnabled?: boolean;
    bottomToolbarEnabled?: boolean;
    hideToolbarsOnTap?: boolean;
    documentSliderEnabled?: boolean;
    pageIndicatorEnabled?: boolean;
    keyboardShortcutsEnabled?: boolean;
    onAnnotationsSelected?: (event: {annotations: Array<AnnotOptions.Annotation>}) => void ;
    onAnnotationChanged?: (event: {action: string, annotations: Array<AnnotOptions.Annotation>}) => void;
    onFormFieldValueChanged?: (event: {fields: Array<AnnotOptions.FieldWithStringValue>}) => void;
    readOnly?: boolean;
    thumbnailViewEditingEnabled?: boolean;
    fitMode?: ConfigOptions.FitMode;
    layoutMode?: ConfigOptions.LayoutMode;
    onLayoutChanged?: () => void;
    padStatusBar?: boolean;
    continuousAnnotationEditing?: boolean;
    selectAnnotationAfterCreation?: boolean;
    annotationAuthor?: string;
    showSavedSignatures?: boolean;
    isBase64String?: boolean;
    collabEnabled?: boolean;
    currentUser?: string;
    currentUserName?: string;
    onExportAnnotationCommand?: (event: {action: string, xfdfCommand: string, annotations: Array<AnnotOptions.Annotation>}) => void;
    autoSaveEnabled?: boolean;
    pageChangeOnTap?: boolean;
    followSystemDarkMode?: boolean;
    useStylusAsPen?: boolean;
    multiTabEnabled?: boolean;
    tabTitle?: string;
    maxTabCount?: number;
    signSignatureFieldsWithStamps?: boolean;
    annotationPermissionCheckEnabled?: boolean;
    annotationToolbars?: Array<ConfigOptions.DefaultToolbars | object>;
    hideDefaultAnnotationToolbars?: Array<ConfigOptions.DefaultToolbars>;
    topAppNavBarRightBar?: Array<ConfigOptions.Buttons>;
    bottomToolbar?: Array<ConfigOptions.Buttons>;
    hideAnnotationToolbarSwitcher?: boolean;
    hideTopToolbars?: boolean;
    hideTopAppNavBar?: boolean;
    onBookmarkChanged?: (event: {bookmarkJson: string}) => void;
    hideThumbnailFilterModes?: Array<ConfigOptions.ThumbnailFilterMode>;
    onToolChanged?: (event: {previousTool: ConfigOptions.Tools | "unknown tool", tool: ConfigOptions.Tools | "unknown tool"}) => void;
    horizontalScrollPos?: number;
    verticalScrollPos?: number;
    onTextSearchStart?: () => void;
    onTextSearchResult?: (event: {found: boolean, textSelection: AnnotOptions.TextSelectionResult | null}) => void;
    hideViewModeItems?: Array<ConfigOptions.ViewModePickerItem>;
    pageStackEnabled?: boolean;
    showQuickNavigationButton?: boolean;
    photoPickerEnabled?: boolean;
    autoResizeFreeTextEnabled?: boolean;
    annotationsListEditingEnabled?: boolean;
    showNavigationListAsSidePanelOnLargeDevices?: boolean;
    restrictDownloadUsage?: boolean;
    userBookmarksListEditingEnabled?: boolean;
    imageInReflowEnabled?: boolean;
    reflowOrientation?: ConfigOptions.ReflowOrientation;
    onUndoRedoStateChanged?: () => void;
    tabletLayoutEnabled?: boolean;
    initialToolbar?: string;
    inkMultiStrokeEnabled?: boolean;
    defaultEraserType?: ConfigOptions.EraserType;
    exportPath?: string;
    openUrlPath?: string;
    hideScrollbars?: boolean;
    saveStateEnabled?: boolean;
    openSavedCopyInNewTab?: boolean;
}


export class DocumentView extends PureComponent<DocumentViewProps, any> {
    getDocumentPath: () => Promise<void> | Promise<string>;
    setToolMode: (toolMode: ConfigOptions.Tools) => Promise<void>;
    commitTool: () => Promise<void> | Promise<boolean>;
    getPageCount: () => Promise<void> | Promise<number>;
    importBookmarkJson: (bookmarkJson: string) => Promise<void>;
    importAnnotationCommand: (xfdfCommand: string, initialLoad?: boolean) => Promise<void>;
    importAnnotations: (xfdf: string) => Promise<void>;
    exportAnnotations: (options?: {annotList: Array<AnnotOptions.Annotation>}) => Promise<void> | Promise<string>;
    flattenAnnotations: (formsOnly: boolean) => Promise<void>;
    deleteAnnotations: (annotations: Array<AnnotOptions.Annotation>) => Promise<void>;
    saveDocument: () => Promise<void> | Promise<string>;
    setFlagForFields: (fields: Array<String>, flag: ConfigOptions.FieldFlags, value: boolean) => Promise<void>;
    getField: (fieldName: string) => Promise<void> | Promise<{fieldName: string, fieldValue?: any, fieldType?: string}>;
    setValueForFields: (fieldsMap: Map<string, string | boolean | number>) => Promise<void>;
    setValuesForFields: (fieldsMap: Map<string, string | boolean | number>) => Promise<void>;
    handleBackButton: () => Promise<void> | Promise<boolean>;
    setFlagForAnnotations: (annotationFlagList: Array<AnnotOptions.AnnotationFlag>) => Promise<void>;
    setFlagsForAnnotations: (annotationFlagList: Array<AnnotOptions.AnnotationFlag>) => Promise<void>;
    selectAnnotation: (id: string, pageNumber: number) => Promise<void>;
    setPropertyForAnnotation: (id: string, pageNumber: number, propertyMap: AnnotOptions.AnnotationProperties) => Promise<void>;
    setPropertiesForAnnotation: (id: string, pageNumber: number, propertyMap: AnnotOptions.AnnotationProperties) => Promise<void>;
    getPropertiesForAnnotation: (id: string, pageNumber: number) => Promise<void> | Promise<AnnotOptions.AnnotationProperties>;
    setDrawAnnotations: (drawAnnotations: boolean) => Promise<void>;
    setVisibilityForAnnotation: (id: string, pageNumber: number, visibility: boolean) => Promise<void>;
    setHighlightFields: (highlightFields: boolean) => Promise<void>;
    getAnnotationAtPoint: (x: number, y: number, distanceThreshold: number, minimumLineWeight: number) => Promise<void> | Promise<AnnotOptions.Annotation>;
    getAnnotationListAt: (x1: number, y1: number, x2: number, y2: number) => Promise<void> | Promise<Array<AnnotOptions.Annotation>>;
    getAnnotationsOnPage: (pageNumber: number) => Promise<void> | Promise<Array<AnnotOptions.Annotation>>;
    getCustomDataForAnnotation: (annotationID: string, pageNumber: number, key: string) => Promise<void> | Promise<string>;
    getPageCropBox: (pageNumber: number) => Promise<void> | Promise<AnnotOptions.CropBox>;
    setCurrentPage: (pageNumber: number) => Promise<void> | Promise<boolean>;
    getVisiblePages: () => Promise<void> | Promise<Array<number>>;
    gotoPreviousPage: () => Promise<void> | Promise<boolean>;
    gotoNextPage: () => Promise<void> | Promise<boolean>;
    gotoFirstPage: () => Promise<void> | Promise<boolean>;
    gotoLastPage: () => Promise<void> | Promise<boolean>;
    showGoToPageView: () => Promise<void>;
    closeAllTabs: () => Promise<void>;
    getZoom: () => Promise<void> | Promise<number>;
    setZoomLimits: (zoomLimitMode: ConfigOptions.ZoomLimitMode, minimum: number, maximum: number) => Promise<void>;
    zoomWithCenter: (zoom: number, x: number, y: number) => Promise<void>;
    zoomToRect: (pageNumber: number, rect: AnnotOptions.Rect) => Promise<void>;
    smartZoom: (x: number, y: number, animated: boolean) => Promise<void>;
    getScrollPos: () => Promise<void> | Promise<{horizontal: number, vertical: number}>;
    getCanvasSize: () => Promise<void> | Promise<{width: number, height: number}>;
    getPageRotation: () => Promise<void> | Promise<AnnotOptions.RotationDegree>;
    rotateClockwise: () => Promise<void>;
    rotateCounterClockwise: () => Promise<void>;
    convertScreenPointsToPagePoints: (points: Array<AnnotOptions.PointWithPage>) => Promise<void> | Promise<Array<AnnotOptions.Point>>;
    convertPagePointsToScreenPoints: (points: Array<AnnotOptions.PointWithPage>) => Promise<void> | Promise<Array<AnnotOptions.Point>>;
    getPageNumberFromScreenPoint: (x: number, y: number) => Promise<void> | Promise<number>;
    setProgressiveRendering: (progressiveRendering: boolean, initialDelay: number, interval: number) => Promise<void>;
    setImageSmoothing: (imageSmoothing: boolean) => Promise<void>;
    setOverprint: (overprint: ConfigOptions.OverprintMode) => Promise<void>;
    setColorPostProcessMode: (colorPostProcessMode: ConfigOptions.ColorPostProcessMode) => Promise<void>;
    setColorPostProcessColors: (whiteColor: AnnotOptions.Color, blackColor: AnnotOptions.Color) => Promise<void>;
    startSearchMode: (searchString: string, matchCase: boolean, matchWholeWord: boolean) => Promise<void>;
    exitSearchMode: () => Promise<void>;
    findText: (searchString: string, matchCase: boolean, matchWholeWord: boolean, searchUp: boolean, regExp: boolean) => Promise<void>;
    cancelFindText: () => Promise<void>;
    getSelection: (pageNumber: number) => Promise<void> | Promise<AnnotOptions.TextSelectionResult | Promise<null>>;
    hasSelection: () => Promise<void> | Promise<boolean>;
    clearSelection: () => Promise<void>;
    getSelectionPageRange: () => Promise<void> | Promise<{begin: number, end: number}>;
    hasSelectionOnPage: (pageNumber: number) => Promise<void> | Promise<boolean>;
    selectInRect: (rect: AnnotOptions.Rect) => Promise<void> | Promise<boolean>;
    isThereTextInRect: (rect: AnnotOptions.Rect) => Promise<void> | Promise<boolean>;
    selectAll: () => Promise<void>;
    setUrlExtraction: (urlExtraction: boolean) => Promise<void>;
    setPageBorderVisibility: (pageBorderVisibility: boolean) => Promise<void>;
    setPageTransparencyGrid: (pageTransparencyGrid: boolean) => Promise<void>;
    setDefaultPageColor: (defaultPageColor: AnnotOptions.Color) => Promise<void>;
    setBackgroundColor: (backgroundColor: AnnotOptions.Color) => Promise<void>;
    exportAsImage: (pageNumber: number, dpi: number, exportFormat: ConfigOptions.ExportFormat) => Promise<void> | Promise<string>;
    undo: () => Promise<void>;
    redo: () => Promise<void>;
    canUndo: () => Promise<void> | Promise<boolean>;
    canRedo: () => Promise<void> | Promise<boolean>;
    showCrop: () => Promise<void>;
    setCurrentToolbar: (toolbar: string) => Promise<void>;
    openThumbnailsView: () => Promise<void>;
}