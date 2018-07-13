// @flow
import * as api from "api";
import Annotation, { TemporaryAnnotation } from "lib/Annotation";
import type { AnnotationUniqueId } from "lib/Annotation";
import Witness from "lib/Witness";
import Text from "lib/Text";

/** Actions types **/

// Data

export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA";
export const LOADING_INITIAL_DATA = "LOADING_INITIAL_DATA";
export const LOADED_INITIAL_DATA = "LOADED_INITIAL_DATA";

export const LOAD_SOURCES = "LOAD_SOURCES";
export const LOADING_SOURCES = "LOADING_SOURCES";
export const LOADED_SOURCES = "LOADED_SOURCES";

export const LOAD_TEXTS = "LOAD_TEXTS";
export const LOADING_TEXTS = "LOADING_TEXTS";
export const LOADED_TEXTS = "LOADED_TEXTS";

export const LOAD_TEXT_DATA = "LOAD_TEXT_DATA";
export const LOADING_TEXT_DATA = "LOADING_TEXT_DATA";

export const LOAD_WITNESSES = "LOAD_WITNESSES";
export const LOADING_WITNESSES = "LOADING_WITNESSES";
export const LOADED_WITNESSES = "LOADED_WITNESSES";

export const LOAD_WITNESS_ANNOTATIONS = "LOAD_WITNESS_ANNOTATIONS";
export const LOADING_WITNESS_ANNOTATIONS = "LOADING_WITNESS_ANNOTATIONS";
export const LOADED_WITNESS_ANNOTATIONS = "LOADED_WITNESS_ANNOTATIONS";
export const LOADED_WITNESS_ANNOTATION_OPERATIONS =
    "LOADED_WITNESS_ANNOTATION_OPERATIONS";
export const LOADED_WITNESS_REMOVED_ANNOTATIONS =
    "LOADED_WITNESS_REMOVED_ANNOTATIONS";

export const LOADED_TEXT_DATA = "LOADED_TEXT_DATA";

// These are intended for when the data will be saved via the server API
export const APPLIED_ANNOTATION = "text/APPLIED_ANNOTATION";
export const REMOVED_APPLIED_ANNOTATION = "text/REMOVED_APPLIED_ANNOTATION";
export const REMOVED_DEFAULT_ANNOTATION = "text/REMOVED_DEFAULT_ANNOTATION";
export const APPLIED_DEFAULT_ANNOTATION = "text/APPLIED_DEFAULT_ANNOTATION";

export const CREATED_ANNOTATION = "text/CREATED_ANNOTATION";
export const UPDATED_ANNOTATION = "text/UPDATED_ANNOTATION";
export const DELETED_ANNOTATION = "text/DELETED_ANNOTATION";
export const SAVED_ANNOTATION = "text/SAVED_ANNOTATION";

// These are for local UI changes
export const ADDED_TEMPORARY_ANNOTATION = "text/ADDED_TEMPORARY_ANNOTATION";
export const UPDATED_TEMPORARY_ANNOTATION = "text/UPDATED_TEMPORARY_ANNOTATION";
export const REMOVED_TEMPORARY_ANNOTATION = "text/REMOVED_TEMPORARY_ANNOTATION";

// UI

export const SELECTED_TEXT = "textList/SELECTED_TEXT";
export const CHANGED_SEARCH_VALUE = "textList/CHANGED_SEARCH_VALUE";

export const SELECTED_WITNESS = "text/SELECTED_WITNESS";
export const CHANGED_SHOW_PAGE_IMAGES = "text/CHANGED_SHOW_PAGE_IMAGES";

export const CHANGED_SELECTED_SEGMENT = "text/CHANGED_SELECTED_SEGMENT";
export const DESELECTED_SEGMENT = "text/DESELECTED_SEGMENT";

export const CHANGED_ACTIVE_ANNOTATION = "text/CHANGED_ACTIVE_ANNOTATION";

export const CHANGED_TEXT_LIST_VISIBLE = "textList/CHANGED_TEXT_LIST_VISIBLE";

export const CHANGED_WITNESS_SCROLL_POSITION =
    "text/CHANGED_WITNESS_SCROLL_POSITION";

// User
export const USER_LOGGED_IN = "users/USER_LOGGED_IN";

/** Action creators **/

export type Action = {
    type: string,
    payload?: any
};

export type WitnessAction = Action & {
    witnessId: number
};

export type TextDataAction = Action & {
    text: api.TextData
};

export type AnnotationAction = Action & {
    annotation: Annotation
};

/* DATA */

// TEXTS

export function loadTexts(): Action {
    return {
        type: LOAD_TEXTS
    };
}

export function loadingTexts(): Action {
    return {
        type: LOADING_TEXTS
    };
}

export type TextsAction = Action & {
    texts: api.TextData[]
};

export function loadedTexts(texts: api.TextData[]): TextsAction {
    return {
        type: LOADED_TEXTS,
        texts
    };
}

// SOURCES

export function loadSources(): Action {
    return {
        type: LOAD_SOURCES
    };
}

export function loadingSources(): Action {
    return {
        type: LOADING_SOURCES
    };
}

export type LoadedSourcesAction = Action & {
    sources: api.SourceData[]
};
export function loadedSources(sources: api.SourceData[]): LoadedSourcesAction {
    return {
        type: LOADED_SOURCES,
        sources
    };
}

// INITIAL DATA

export function loadInitialData(): Action {
    return {
        type: LOAD_INITIAL_DATA
    };
}

export function loadingInitialData(): Action {
    return {
        type: LOADING_INITIAL_DATA
    };
}

export function loadedInitialData(): Action {
    return {
        type: LOADED_INITIAL_DATA
    };
}

// export function loadTextData(text) {
//     return {
//         type: LOAD_TEXT_DATA,
//         text,
//     };
// }

// export function loadingTextData(text) {
//     return {
//         type: LOADING_TEXT_DATA,
//         text,
//     };
// }

// export function loadedTextData(text) {
//     return {
//         type: LOADED_TEXT_DATA,
//         text,
//     };
// }

// WITNESSES

// export function loadWitnesses(text) {
//     return {
//         type: LOAD_WITNESSES,
//         text,
//     };
// }

export function loadingWitnesses(text: api.TextData): TextDataAction {
    return {
        type: LOADING_WITNESSES,
        text
    };
}

export type LoadedWitnessesAction = TextDataAction & {
    witnesses: api.WitnessData[]
};
export function loadedWitnesses(
    text: api.TextData,
    witnesses: api.WitnessData[]
) {
    return {
        type: LOADED_WITNESSES,
        text,
        witnesses
    };
}

// ANNOTATIONS

export function loadWitnessAnnotations(witnessId: number): WitnessAction {
    return {
        type: LOAD_WITNESS_ANNOTATIONS,
        witnessId
    };
}

export function loadingWitnessAnnotations(witnessId: number): WitnessAction {
    return {
        type: LOADING_WITNESS_ANNOTATIONS,
        witnessId
    };
}

export type LoadedWitnessAnnotationsAction = Action & {
    witnessId: number,
    annotations: api.AnnotationData[]
};
export function loadedWitnessAnnotations(
    witnessId: number,
    annotations: api.AnnotationData[]
): LoadedWitnessAnnotationsAction {
    return {
        type: LOADED_WITNESS_ANNOTATIONS,
        witnessId,
        annotations
    };
}

export type LoadedWitnessAnnotationOperationsAction = WitnessAction & {
    annotationOperations: api.AnnotationOperationData[]
};
export function loadedWitnessAnnotationOperations(
    witnessId: number,
    annotationOperations: api.AnnotationOperationData[]
): LoadedWitnessAnnotationOperationsAction {
    return {
        type: LOADED_WITNESS_ANNOTATION_OPERATIONS,
        witnessId,
        annotationOperations
    };
}

export type AppliedAnnotationAction = Action & {
    annotationId: AnnotationUniqueId,
    witnessData: api.WitnessData
};
export function appliedAnnotation(
    annotationId: AnnotationUniqueId,
    witnessData: api.WitnessData
): AppliedAnnotationAction {
    return {
        type: APPLIED_ANNOTATION,
        annotationId,
        witnessData: witnessData
    };
}

export type RemovedAppliedAnnotationAction = Action & {
    annotationId: AnnotationUniqueId,
    witnessData: api.WitnessData
};
export function removedAppliedAnnotation(
    annotationId: AnnotationUniqueId,
    witnessData: api.WitnessData
): RemovedAppliedAnnotationAction {
    return {
        type: REMOVED_APPLIED_ANNOTATION,
        annotationId,
        witnessData: witnessData
    };
}

export type RemovedDefaultAnnotationAction = Action & {
    annotationId: AnnotationUniqueId,
    witnessData: api.WitnessData
};
export function removedDefaultAnnotation(
    annotationId: AnnotationUniqueId,
    witnessData: api.WitnessData
): RemovedDefaultAnnotationAction {
    return {
        type: REMOVED_DEFAULT_ANNOTATION,
        annotationId,
        witnessData: witnessData
    };
}

export type AppliedDefaultAnnotationAction = Action & {
    annotationId: AnnotationUniqueId,
    witnessData: api.WitnessData
};
export function appliedDefaultAnnotation(
    annotationId: AnnotationUniqueId,
    witnessData: api.WitnessData
): AppliedDefaultAnnotationAction {
    return {
        type: APPLIED_DEFAULT_ANNOTATION,
        annotationId,
        witnessData: witnessData
    };
}

export type CreatedAnnotationAction = Action & {
    annotation: Annotation,
    witness: Witness
};
/**
 * The given annotation has been created and applied.
 */
export function createdAnnotation(
    annotation: Annotation,
    witness: Witness
): CreatedAnnotationAction {
    return {
        type: CREATED_ANNOTATION,
        annotation,
        witness
    };
}

export type UpdatedAnnotationAction = Action & {
    annotation: Annotation,
    witness: Witness
};
/**
 * The given annotation has been updated with new data.
 */
export function updatedAnnotation(
    annotation: Annotation,
    witness: Witness
): UpdatedAnnotationAction {
    return {
        type: UPDATED_ANNOTATION,
        annotation,
        witness
    };
}

export type DeletedAnnotationAction = Action & {
    annotation: Annotation,
    witness: Witness
};
/**
 * The given annotation has been updated with new data.
 */
export function deletedAnnotation(
    annotation: Annotation,
    witness: Witness
): DeletedAnnotationAction {
    return {
        type: DELETED_ANNOTATION,
        annotation,
        witness
    };
}

export type SavedAnnotationAction = Action & {
    annotation: Annotation
};
/**
 * The annotation has been succesfully saved and given a
 * valid id.
 */
export function savedAnnotation(annotation: Annotation): SavedAnnotationAction {
    return {
        type: SAVED_ANNOTATION,
        annotation
    };
}

/* USER */
export type UserAction = Action & {
    userId: number,
    userName: string
};
export function userLoggedIn(userId: number, userName: string): UserAction {
    return {
        type: USER_LOGGED_IN,
        userId,
        userName
    };
}

/* UI */

export type SelectedTextAction = Action & TextDataAction;
export function selectedText(text: api.TextData): SelectedTextAction {
    return {
        type: SELECTED_TEXT,
        text
    };
}

export type ChangedSearchValueAction = Action & {
    searchValue: string
};
export function changedSearchValue(
    searchValue: string
): ChangedSearchValueAction {
    return {
        type: CHANGED_SEARCH_VALUE,
        searchValue
    };
}

export type ChangedShowPageImagesAction = Action & {
    showPageImages: boolean
};
export function changedShowPageImages(
    showPageImages: boolean
): ChangedShowPageImagesAction {
    return {
        type: CHANGED_SHOW_PAGE_IMAGES,
        showPageImages
    };
}

export type SelectedTextWitnessAction = Action & {
    witnessId: number,
    textId: number
};
export function selectedTextWitness(
    textId: number,
    witnessId: number
): SelectedTextWitnessAction {
    return {
        type: SELECTED_WITNESS,
        textId,
        witnessId
    };
}

// export type ChangedSelectedSegmentAction = Action & {
//     segment: TextSegment
// }
// export function changedSelectedSegment(segment: TextSegment): ChangedSelectedSegmentAction {
//     return {
//         type: CHANGED_SELECTED_SEGMENT,
//         segment,
//     }
// }

export type AddedTemporaryAnnotationAction = Action & {
    annotation: TemporaryAnnotation,
    isActive: boolean
};
export function addedTemporaryAnnotation(
    annotation: TemporaryAnnotation,
    isActive: boolean
): AddedTemporaryAnnotationAction {
    return {
        type: ADDED_TEMPORARY_ANNOTATION,
        annotation,
        isActive
    };
}

// /**
//  *
//  * @param {Annotation} annotation
//  * @param {boolean} isActive - whether the annotation is currently active
//  */
// export function updatedTemporaryAnnotation(annotation, isActive) {
//     return {
//         type: UPDATED_TEMPORARY_ANNOTATION,
//         annotation,
//         isActive
//     }
// }

export type RemovedTemporaryAnnotationAction = Action & {
    annotation: TemporaryAnnotation
};
export function removedTemporaryAnnotation(
    annotation: TemporaryAnnotation
): RemovedTemporaryAnnotationAction {
    return {
        type: REMOVED_TEMPORARY_ANNOTATION,
        annotation
    };
}

export type ChangedActiveAnnotationAction = Action & {
    annotation: Annotation | null
};

export function changedActiveAnnotation(
    annotation: Annotation | null
): ChangedActiveAnnotationAction {
    return {
        type: CHANGED_ACTIVE_ANNOTATION,
        annotation
    };
}

export type ChangedTextListVisibleAction = Action & {
    isVisible: boolean
};
export function changedTextListVisible(
    isVisible: boolean
): ChangedTextListVisibleAction {
    return {
        type: CHANGED_TEXT_LIST_VISIBLE,
        isVisible
    };
}
