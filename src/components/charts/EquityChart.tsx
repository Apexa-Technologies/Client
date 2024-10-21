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
                    "y": 248
                  },
                  {
                    "x": "helicopter",
                    "y": 230
                  },
                  {
                    "x": "boat",
                    "y": 249
                  },
                  {
                    "x": "train",
                    "y": 242
                  },
                  {
                    "x": "subway",
                    "y": 133
                  },
                  {
                    "x": "bus",
                    "y": 255
                  },
                  {
                    "x": "car",
                    "y": 73
                  },
                  {
                    "x": "moto",
                    "y": 35
                  },
                  {
                    "x": "bicycle",
                    "y": 134
                  },
                  {
                    "x": "horse",
                    "y": 87
                  },
                  {
                    "x": "skateboard",
                    "y": 70
                  },
                  {
                    "x": "others",
                    "y": 292
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
              // using helpers
              // will inherit colors from current element
              linearGradientDef('gradientA', [
                  { offset: 0, color: 'inherit' },
                  { offset: 100, color: 'inherit', opacity: 0 },
              ]),
              linearGradientDef('gradientB', [
                  { offset: 0, color: '#000' },
                  { offset: 100, color: 'inherit' },
              ],
              // you may specify transforms for your gradients, e.g. rotations and skews,
              // following the transform attribute format.
              // For instance here we rotate 90 degrees relative to the center of the object.
              {
                  gradientTransform: 'rotate(90 0.5 0.5)'
              }),
              // using plain object
              {
                  id: 'gradientC',
                  type: 'linearGradient',
                  colors: [
                      { offset: 0, color: '#AD00FF' },
                      { offset: 100, color: '#AD00FF00' },
                  ],
              },
          ]}

            fill={[
              // match using object query
              { match: { id: 'react' }, id: 'gradientA' },
              // match using function
              { match: d => d.id === 'vue', id: 'gradientB' },
              // match all, will only affect 'elm', because once a rule match,
              // others are skipped, so now it acts as a fallback
              { match: '*', id: 'gradientC' },
          ]}
        />
    )
}