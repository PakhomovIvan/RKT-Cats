export interface ActionsProps {
  setIsEnabled: (value: boolean) => void
  setIsAutoRefresh: (value: boolean) => void
  getCat: () => Promise<void>
  isEnabled: boolean
}
