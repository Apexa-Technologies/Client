import { ResponsiveLine } from '@nivo/line'
import { linearGradientDef } from '@nivo/core'

export default function EquityChart(){
    {/* Make sure to fetch real equity data from server */}
    const data = [
        {
            "id": "Equity",
            "color": "hsl(231, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 135
                  },
                  {
                    "x": "helicopter",
                    "y": 120
                  },
                  {
                    "x": "boat",
                    "y": 105
                  },
                  {
                    "x": "train",
                    "y": 140
                  },
                  {
                    "x": "subway",
                    "y": 170
                  },
                  {
                    "x": "bus",
                    "y": 170
                  },
                  {
                    "x": "car",
                    "y": 150
                  },
                  {
                    "x": "moto",
                    "y": 210
                  },
                  {
                    "x": "bicycle",
                    "y": 220
                  },
                  {
                    "x": "horse",
                    "y": 190
                  },
                  {
                    "x": "skateboard",
                    "y": 200
                  },
                  {
                    "x": "others",
                    "y": 230
                  }
            ]
        }
    ]

    return(
        <ResponsiveLine 
            data={data}
            margin={{ top: 50, right: 0, bottom: 50, left: 0 }}

            colors={{ scheme: 'category10' }}

            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}

            curve="natural"
            lineWidth={0}


            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}

            enableGridX={false}
            enableGridY={false}
            enablePoints={false}

            enableArea={true}
            areaBaselineValue={0}
            areaOpacity={1}

            enableTouchCrosshair={true}
            useMesh={true}

            defs={[
              linearGradientDef('gradientA', [
                  { offset: 0, color: 'inherit' },
                  { offset: 100, color: 'inherit', opacity: 0 },
              ]),
              linearGradientDef('gradientB', [
                  { offset: 0, color: '#000' },
                  { offset: 100, color: 'inherit' },
              ],
              {
                  gradientTransform: 'rotate(90 0.5 0.5)'
              }),
              {
                  id: 'gradientC',
                  type: 'linearGradient',
                  colors: [
                      { offset: 0, color: '#AD00FF' },
                      { offset: 70, color: '#AD00FF00' },
                  ],
              },
          ]}

            fill={[
              { match: { id: 'react' }, id: 'gradientA' },
              { match: d => d.id === 'vue', id: 'gradientB' },
              { match: '*', id: 'gradientC' },
          ]}
        />
    )
}