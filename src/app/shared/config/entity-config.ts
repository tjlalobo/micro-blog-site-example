
import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    chirp: {}
};

const pluralNames = { chirp: 'chirps' };

export const entityConfig = {
    entityMetadata,
    pluralNames
}