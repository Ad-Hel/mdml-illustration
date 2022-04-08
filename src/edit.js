/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import { SelectControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
 export default function Edit( { attributes, setAttributes } ) {
    return (
        <div { ...useBlockProps() }>
			<SelectControl
				label={ __( 'Svg', 'mdml-illustration' ) }
				value={ attributes.svg }
				options={ [
					{ label: 'Femme coupe afro', value: 'AfroCutWoman' },
					{ label: 'Femme de dos', value: 'BackWoman' },
					{ label: 'Homme barbu', value: 'BeardedMan' },
					{ label: 'Femme qui danse', value: 'DancingWoman' },
					{ label: 'Homme à lunettes', value: 'GlassesMan' },
					{ label: 'Femme à lunettes', value: 'GlassesWoman' },
					{ label: 'Poignée de mains', value: 'Handshake' },
					{ label: 'Petite fille', value: 'LittleGirl' },
					{ label: 'Vieil Homme', value: 'OldMan' },
					{ label: 'Femme de profil', value: 'ProfilWoman' },
					{ label: 'Femme rousse', value: 'RedWoman' },
					{ label: 'Femme souriante', value: 'SmilingWoman' },
					{ label: 'Femme zébrée', value: 'ZebraWoman' },
					{ label: 'Tâche jaune', value: 'YellowSplash' },
					
				]}
				onChange={ (newIllus) => setAttributes({svg: newIllus})}
			/>
        </div>
    );
}
