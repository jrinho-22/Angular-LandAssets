export default interface IModalBuyPlotValues {
    plotId: number | undefined,
    plotNumber: number | undefined,
    stateName: string | undefined,
    totalPrice: number | undefined,
    action: () => void
}