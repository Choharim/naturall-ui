import { useSafeContext } from '../../../shared/hooks';
import { ControlContext } from './TabsControlProvider';
export const useTabsControlContext = () => {
    return useSafeContext({ context: ControlContext });
};
